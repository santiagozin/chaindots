// src/pages/Login.jsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputOutline from "../ui/input-outline";
import user from "../../config/user.json";
import IconButton from "@mui/material/IconButton";
import { useWeather } from "@/hook/useWeather";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const { setUser } = useWeather();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleLogin = () => {

    const foundUser = user.user.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(true);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(#c9dbe9 0%, #fff 100%)",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "60px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        Iniciar Sesión
      </Typography>
      <InputOutline
        label="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        color={"#077dad"}
        error={error}
      />

      <FormControl 
        sx={{ 
          m: 1, 
          width: "100%", 
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#077dad',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: '#077dad',
            },
          },
        }} 
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          error={error}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#077dad",
          color: "white",
          width: "100%",
          mt: 2,
        }}
        onClick={handleLogin}
      >
        Ingresar
      </Button>
      {error && (
        <Typography color="error" sx={{ my: 1, color: "red" }}>
          Usuario o contraseña incorrectos
        </Typography>
      )}
    </Box>
        </Box>
  );
};

export default Login;
