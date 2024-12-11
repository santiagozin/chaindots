import { Box, Typography } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        backgroundColor: "#1095e9",
        px: 2,
        md: {
            px: 10
        }
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 2}}>
        <PublicOutlinedIcon
          sx={{   fontSize: { xs: ".9rem", lg: "1.5rem" }, color: "white", mr: 1 }}
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: ".9rem", md: "1.3rem" },
              textAlign: "center"
            }}
          >
            Climas del mundo
          </Typography>
        </Link>
        <Link to="/ciudades-favoritas" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "1rem", md: "1.2rem" },
              ml: 5,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Ciudades Favoritas
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
