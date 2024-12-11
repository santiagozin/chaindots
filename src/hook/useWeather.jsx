import { useAppContext } from "../context/WeatherContext";

export const useWeather = () => {
  const context = useAppContext();

  const {dataWeather, setDataWeather, favoriteCities, setFavoriteCities, user, setUser } = context;

  return {
    dataWeather, setDataWeather, favoriteCities, setFavoriteCities, user, setUser
  };
};
