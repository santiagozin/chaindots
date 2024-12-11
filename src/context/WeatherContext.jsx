import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {


  const [dataWeather, setDataWeather] = useState(() => {
    const savedData = localStorage.getItem('weatherData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [favoriteCities, setFavoriteCities] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteCities');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : false;
  });

  React.useEffect(() => {
    localStorage.setItem('weatherData', JSON.stringify(dataWeather));
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
    localStorage.setItem('user', JSON.stringify(user));
  }, [dataWeather, favoriteCities, user]);

  return (
    <AppContext.Provider
      value={{
        dataWeather,
        setDataWeather,
        favoriteCities,
        setFavoriteCities,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
