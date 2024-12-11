import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../context/WeatherContext';
import FavoriteCity from '../pages/favorites/favoriteCity';

describe('FavoriteCity', () => {
  const mockSetFavoriteCities = jest.fn();
  const mockFavoriteCities = [
    { city: 'Madrid' },
    { city: 'Barcelona' }
  ];

  const renderFavoriteCity = () => {
    return render(
      <BrowserRouter>
        <AppContext.Provider value={{ 
          favoriteCities: mockFavoriteCities,
          setFavoriteCities: mockSetFavoriteCities
        }}>
          <FavoriteCity />
        </AppContext.Provider>
      </BrowserRouter>
    );
  };

  test('renderiza las ciudades favoritas correctamente', async () => {
    renderFavoriteCity();
    for (const city of mockFavoriteCities) {
      const element = await screen.findByText(city.city);
      expect(element).toBeInTheDocument();
    }
  });

  test('muestra mensaje cuando no hay ciudades favoritas', async () => {
    render(
      <BrowserRouter>
        <AppContext.Provider value={{ 
          favoriteCities: [],
          setFavoriteCities: mockSetFavoriteCities
        }}>
          <FavoriteCity />
        </AppContext.Provider>
      </BrowserRouter>
    );
    const message = await screen.findByText('No hay ciudades favoritas');
    expect(message).toBeInTheDocument();
  });

  test('permite eliminar una ciudad de favoritos', async () => {
    renderFavoriteCity();
    const removeButton = await screen.findAllByRole('button');
    fireEvent.click(removeButton[0]);
    expect(mockSetFavoriteCities).toHaveBeenCalledWith([{ city: 'Barcelona' }]);
  });
});
