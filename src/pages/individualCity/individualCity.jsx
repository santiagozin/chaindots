import React from "react";
import { useWeather } from "../../hook/useWeather";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid2, Typography } from "@mui/material";
import {
  DeviceThermostatOutlined,
  ThermostatAutoOutlined,
  WavesOutlined,
} from "@mui/icons-material";
import InfoCard from "./infoCard";
import ExtendWeather from "./extendWeather";
import AddFavorite from "./addFavorite";

const commonStyles = {
  color: "black",
  textAlign: "center",
  fontSize: "1.2rem",
};

const StyledItem = styled(Paper)(({ theme }) => ({
  borderRadius: "10px",
  background: "linear-gradient(to right, #fff, #e6e6e6)",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "120px",
}));

const WeatherIcon = ({ icon, description }) => (
  <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
    <StyledItem sx={{ p: 5, minHeight: "170px" }}>
      <img
        src={icon}
        alt={description}
      />
      <Typography
        variant="h6"
        sx={{ ...commonStyles, textTransform: "capitalize" }}
      >
        {description}
      </Typography>
    </StyledItem>
  </Grid2>
);

const City = () => {
  const { dataWeather } = useWeather();
  const { location, current, forecast } = dataWeather;

  return (
    <Box sx={{ flexGrow: 1, mt: 10, maxWidth: "80%", mx: "auto", mb: 20}}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
          {location?.name}
        </Typography>
        <AddFavorite city={location?.name} color="white" />
      </Box>

      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        <WeatherIcon
          icon={current.condition.icon}
          description={current.condition.text}
        />

        <InfoCard
          icon={DeviceThermostatOutlined}
          title="Temperatura"
          value={current.temp_c}
          extraContent={
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid black",
                mt: 2,
              }}
            >
              <Typography sx={commonStyles}>
                    Min: {current.temp_c}
              </Typography>
              <Typography sx={commonStyles}>
                Máx: {current.temp_f}
              </Typography>
            </Box>
          }
        />

        <InfoCard
          icon={ThermostatAutoOutlined}
          title="Humedad"
          value={current.humidity}
        />

        <InfoCard
          icon={WavesOutlined}
          title="Nivel del mar"
          value={current.pressure_mb}
        />
      </Grid2>

      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          sx={{ color: "white", mb: 3, textAlign: "center" }}
        >
          Pronóstico por días
        </Typography>

        <ExtendWeather forecast={forecast} StyledItem={StyledItem} />
      </Box>
    </Box>
  );
};

export default City;
