import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../context/WeatherContext';
import City from '../pages/individualCity/individualCity';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

jest.mock('../hook/useWeather', () => ({
  useWeather: () => ({
    dataWeather: {
      location: {
        name: 'Madrid'
      },
      current: {
        condition: {
          icon: '01d',
          text: 'soleado'
        },
        temp_c: 25,
        temp_f: 77,
        humidity: 60,
        wind_kph: 10,
        wind_dir: 'N',
        pressure_mb: 1015,
        precip_mm: 0,
        feelslike_c: 27,
        feelslike_f: 80
      },
      forecast: {
        forecastday: []
      }
    }
  })
}));

describe('City', () => {
  const mockWeatherData = {
    location: {
      name: 'Madrid'
    },
    current: {
      condition: {
        icon: '01d',
        text: 'soleado'
      },
      temp_c: 25,
      temp_f: 77,
      humidity: 60,
      wind_kph: 10,
      wind_dir: 'N',
      pressure_mb: 1015,
      precip_mm: 0,
      feelslike_c: 27,
      feelslike_f: 80
    },
    forecast: {
      forecastday: []
    }
  };

  const renderCity = () => {
    return render(
      <BrowserRouter>
        <AppContext.Provider value={{ 
          dataWeather: mockWeatherData,
          setDataWeather: jest.fn(),
          favoriteCities: [],
          setFavoriteCities: jest.fn()
        }}>
          <City />
        </AppContext.Provider>
      </BrowserRouter>
    );
  };

  test('renderiza el nombre de la ciudad', () => {
    renderCity();
    expect(screen.getByText('Madrid')).toBeInTheDocument();
  });

  test('muestra la información del clima', () => {
    renderCity();
    expect(screen.getByText('Temperatura')).toBeInTheDocument();
    expect(screen.getByText('Humedad')).toBeInTheDocument();
    expect(screen.getByText('Nivel del mar')).toBeInTheDocument();
  });

  test('muestra los valores de temperatura correctamente', () => {
    renderCity();
    expect(screen.getByText(/Min: /)).toBeInTheDocument();
    expect(screen.getByText(/Máx: /)).toBeInTheDocument();
  });
});