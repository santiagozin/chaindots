import { render, act } from '@testing-library/react';
import { AppProvider, useAppContext } from '../context/WeatherContext';
import jest from 'jest';

describe('WeatherContext', () => {
  const TestComponent = () => {
    const { dataWeather, setDataWeather, favoriteCities, setFavoriteCities } = useAppContext();
    return (
      <div>
        <div data-testid="weather">{JSON.stringify(dataWeather)}</div>
        <div data-testid="favorites">{JSON.stringify(favoriteCities)}</div>
        <button onClick={() => setDataWeather({ test: 'data' })}>Set Weather</button>
        <button onClick={() => setFavoriteCities(['city1'])}>Set Favorites</button>
      </div>
    );
  };

  beforeEach(() => {
    localStorage.clear();
  });

  test('proporciona los valores iniciales correctos', () => {
    const { getByTestId } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByTestId('weather')).toHaveTextContent('[]');
    expect(getByTestId('favorites')).toHaveTextContent('[]');
  });

  test('actualiza y persiste los datos correctamente', () => {
    const { getByTestId, getByText } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    act(() => {
      getByText('Set Weather').click();
    });

    expect(getByTestId('weather')).toHaveTextContent('{"test":"data"}');
    expect(localStorage.getItem('weatherData')).toBe('{"test":"data"}');
  });
});