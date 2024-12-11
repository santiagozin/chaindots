import React from "react";
import AddFavorites from "./favoriteCity";
import { Box } from "@mui/material";

const Favorites = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 64px)", width: "100%", display: "flex", justifyContent: "center"}}>

      <AddFavorites />
    </Box>
  );
};

export default Favorites;
