import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from '../context/WeatherContext';
import Login from '../components/custom/login';

describe('Login', () => {
  const mockSetUser = jest.fn();

  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <AppContext.Provider value={{ setUser: mockSetUser }}>
          <Login />
        </AppContext.Provider>
      </BrowserRouter>
    );
  };

  test('renderiza los campos de usuario y contraseña', () => {
    renderLogin();
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('muestra un error con credenciales incorrectas', () => {
    renderLogin();
    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'incorrecto' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'incorrecto' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));
    expect(screen.getByText('Usuario o contraseña incorrectos')).toBeInTheDocument();
  });

  test('navega a la página principal con credenciales correctas', () => {
    renderLogin();
    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'chaindots' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'chaindots' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));
    expect(mockSetUser).toHaveBeenCalledWith(true);
  });

});
