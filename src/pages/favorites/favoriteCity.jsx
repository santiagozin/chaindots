import React, { useState, useEffect } from "react";
import { useWeather } from "@/hook/useWeather";
import { getWeather } from "@/services/weather";
import { Box, Paper, Typography, Skeleton } from "@mui/material";
import AddFavorite from "@/pages/individualCity/addFavorite";

const FavoriteCity = () => {
  const { favoriteCities } = useWeather();
  const [weatherDataList, setWeatherDataList] = useState({});
  const [loading, setLoading] = useState(true);

  const mockWeatherData = [
    {
      name: "Ciudad Mock",
      weather: [{ id: 1, description: "Despejado", icon: "01d" }],
      main: { temp: 25 },
    },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!favoriteCities || favoriteCities.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const promises = favoriteCities.map(async (city) => {
          try {
            const data = await getWeather(city.city);
            return { [city.city]: data };
          } catch (error) {
            console.error(`Error fetching weather for ${city.city}:`, error);
            return { [city.city]: mockWeatherData[0] };
          }
        });

        const results = await Promise.all(promises);
        const weatherData = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setWeatherDataList(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [favoriteCities]);

  return (
    <Box sx={{display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
      {favoriteCities && favoriteCities.length > 0 ? (
        favoriteCities.map((city, index) => {
          if (!city) {
            console.error(`Ciudad inválida en el índice ${index}`, city);
            return <div key={index}>Ciudad inválida</div>;
          }

          const weatherData = weatherDataList[city.city];

          if (!weatherData || loading) {
            return (
              <Box key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    minWidth: "200px",
                    width: "20%",
                    p: 2,
                    borderRadius: "30px",
                    mt: 10,
                  }}
                >
                  <Skeleton variant="text" width={100} height={30} />
                  <Skeleton variant="text" width={80} height={20} />
                  <Skeleton variant="rectangular" width={60} height={60} />
                </Paper>
              </Box>
            );
          }

          return (
            <Paper
              elevation={6}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                minWidth: "200px",
                width: "20%",
                p: 2,
                borderRadius: "30px",
                mt: 10,
              }}
            >
              <AddFavorite city={city.city} color="black" />
              <Typography
                variant="h4"
                sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {city.city}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "1.2rem" }}>
                {weatherData.current.condition.text}
              </Typography>
              <Typography variant="h6">{weatherData.current.temp_c}°C</Typography>
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
              />
            </Paper>
          );
        })
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}
          >
            No hay ciudades favoritas
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FavoriteCity;
