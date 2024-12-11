import React from "react";
import PropTypes from 'prop-types';
import { Grid2, Box, Typography } from "@mui/material";

const styles = {
  gridContainer: {
    width: "100%",
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  gridItem: {
    justifyContent: "space-between",
    flexBasis: {
      xs: "100%",
      sm: "100%",
      lg: "32%",
    },
    maxWidth: {
      xs: "100%",
      sm: "100%",
      lg: "32%",
    },
    padding: 1,
  },
  weatherBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 1,
  },
};

const WeatherPrediction = ({ weather, isLast }) => (
  <Box
    sx={{
      ...styles.weatherBox,
      borderBottom: !isLast ? "1px solid #eee" : "none",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", flex: "1", minWidth: 0 }}>
      <img
        src={weather.condition.icon}
        alt={weather.condition.text}
        style={{ width: 50, height: 50, flexShrink: 0 }}
      />
      <Typography
        sx={{
          ml: 1,
          fontSize: "1.2rem",
          flexGrow: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
          fontWeight: 500
        }}
      >
        {weather.condition.text}
      </Typography>
    </Box>
    <Typography sx={{ fontWeight: "bold", ml: 2, flexShrink: 0 }}>
      {Math.round(weather.avgtemp_c)}°C
    </Typography>
  </Box>
);

const ExtendWeather = ({ forecast, StyledItem }) => {
  return (
    <Grid2 container spacing={2} sx={styles.gridContainer}>
      {forecast.forecastday.map((dayForecast) => (
        <Grid2 key={dayForecast.date} sx={styles.gridItem}>
          <StyledItem sx={{ height: "auto", p: 2, boxSizing: "border-box", width: "100%" }}>
            <Typography variant="h6" sx={{ borderBottom: "1px solid #eee", pb: 1 }}>
              {new Date(dayForecast.date).toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
              })}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <WeatherPrediction
                weather={dayForecast.day}
                isLast={true}
              />
            </Box>
          </StyledItem>
        </Grid2>
      ))}
    </Grid2>
  );
};

ExtendWeather.propTypes = {
  forecast: PropTypes.shape({
    forecastday: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        day: PropTypes.shape({
          avgtemp_c: PropTypes.number,
          condition: PropTypes.shape({
            text: PropTypes.string,
            icon: PropTypes.string
          })
        })
      })
    )
  }),
  StyledItem: PropTypes.elementType.isRequired
};

export default ExtendWeather;
