import { Box } from "@mui/material";
import Search from "./search";
import Typography from "@mui/material/Typography";
import FavoriteCity from "../favorites/favoriteCity";

const Home = () => {  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 64px)",
          width: "100%",
          mt: {xs: 5, md: 20},
        }}
      >
        <Search />

        <Box
          sx={{
            mt: 15,
            display: "flex",
            gap: 2,
            mb: 20,
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", ml: 10 }}>
            Ciudades Favoritas
          </Typography>
          <Box sx={{ pl: 10}}>
            <FavoriteCity />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
