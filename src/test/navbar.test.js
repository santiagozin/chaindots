import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/custom/navbar';

jest.mock('@mui/material', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  Typography: ({ children, ...props }) => <span {...props}>{children}</span>
}));

jest.mock('@mui/icons-material', () => ({
  default: () => <span data-testid="public-icon" />
}));

describe('Navbar', () => {
  const renderNavbar = () => {
    return render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  test('renderiza el título correctamente', () => {
    renderNavbar();
    expect(screen.getByText('Climas del mundo')).toBeInTheDocument();
  });

  test('renderiza el enlace a favoritos', () => {
    renderNavbar();
    expect(screen.getByText('Ciudades Favoritas')).toBeInTheDocument();
  });

  test('contiene los enlaces correctos', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /climas del mundo/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /ciudades favoritas/i })).toHaveAttribute('href', '/ciudades-favoritas');
  });
});