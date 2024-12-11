import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useWeather } from "../../hook/useWeather";
import React from "react";

const AddFavorite = ({ city, color }) => {
  const { favoriteCities, setFavoriteCities } = useWeather();
  const [isFavorite, setIsFavorite] = React.useState(false);


  React.useEffect(() => {
    const isCurrentlyFavorite = favoriteCities?.some(fav => fav.city === city) || false;
    setIsFavorite(isCurrentlyFavorite);
  }, [favoriteCities, city]);

  const handleFavorite = () => {
    if (isFavorite) {
      const newFavorites = favoriteCities ? favoriteCities.filter(fav => fav.city !== city) : [];
      setFavoriteCities(newFavorites);
      setIsFavorite(false);
    } else {
      const newCity = { city };
      setFavoriteCities([...(favoriteCities || []), newCity]);
      setIsFavorite(true);
    }
  };

  return (
    <IconButton onClick={handleFavorite} sx={{ color: color }}>
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default AddFavorite;
