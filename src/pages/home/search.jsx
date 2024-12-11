import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import BasicInput from "../../components/ui/input";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getWeather } from "../../services/weather";
import { useWeather } from "../../hook/useWeather";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from 'react-router-dom';
import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Search = () => {
  const cities = ["Londres", "Buenos Aires", "Madrid"];

  const { setDataWeather } = useWeather();

  const [valueCity, setValueCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    const capitalizedValue = formattedValue
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setValueCity(capitalizedValue);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const weather = await getWeather(valueCity);
      
      if (weather) {
        setDataWeather(weather);
        navigate('/ciudad');
      }
    } catch (error) {
      const mockWeather = {
        name: valueCity,
        weather: [{ icon: '01d', description: 'soleado' }],
        main: {
          temp: 20,
          temp_min: 15,
          temp_max: 25,
          humidity: 60,
          sea_level: 1015
        },
        extendedWeather: {
          list: [
            {
              dt_txt: "2023-10-01 12:00:00",
              weather: [{ icon: '01d', description: 'soleado' }],
              main: { temp: 22, humidity: 55 }
            },
            {
              dt_txt: "2023-10-02 12:00:00",
              weather: [{ icon: '02d', description: 'parcialmente nublado' }],
              main: { temp: 24, humidity: 50 }
            },
            {
              dt_txt: "2023-10-03 12:00:00",
              weather: [{ icon: '03d', description: 'nublado' }],
              main: { temp: 21, humidity: 65 }
            },
            {
              dt_txt: "2023-10-04 12:00:00",
              weather: [{ icon: '04d', description: 'lluvioso' }],
              main: { temp: 19, humidity: 70 }
            },
            {
              dt_txt: "2023-10-05 12:00:00",
              weather: [{ icon: '09d', description: 'tormenta' }],
              main: { temp: 18, humidity: 80 }
            }
          ]
        }
      };
      setDataWeather(mockWeather);
      navigate('/ciudad');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        width: "100%",
      }}
    >
      <Typography sx={{ mb: 6, fontSize: "1.5rem" }} variant="h4">
        Ingrese una ciudad para obtener el clima
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: {xs: "90%", md: "500px"},
          position: "relative",
  
        }}
      >
        <BasicInput
          disabled={loading}
          label={loading ? "Buscando..." : "Ciudad"}
          value={valueCity}
          onChange={handleChange}
          color="white"
        />
        <IconButton
          disabled={valueCity.length === 0}
          type="button"
          onClick={handleSearch}
          sx={{
            p: "10px",
            borderRadius: "10px",
            border: "2px solid white",
            ml: 2,
            backgroundColor: "white",
            position: {xs: "relative", md: "absolute"},
            right: {xs: "0", md: "-60px"},
          }}
          aria-label="search"
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "white" }} />
          ) : (
            <Tooltip title="Buscar">
            <SearchIcon sx={{ color: "black" }} />
            </Tooltip>
          )}
        </IconButton>
      </Box>
      <Stack
        sx={{ mt: 2, width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        direction="row"
        spacing={1}
      >
        {cities.map((city) => (
          <Chip
            key={city}
            label={city}
            variant="outlined"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
              },
            }}
            onClick={() => setValueCity(city)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Search;
