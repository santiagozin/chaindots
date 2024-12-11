import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from '@/pages/home/home'
import Layout from '@/layout'
import { AppProvider } from '@/context/WeatherContext'
import ProtectedRoute from './components/custom/protectedRoute';
import City from '@/pages/individualCity/individualCity';
import Favorites from '@/pages/favorites/favorites';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/ciudad" 
              element={
                <ProtectedRoute>
                  <City />
                </ProtectedRoute>
              } 
            />
                <Route 
              path="/ciudades-favoritas" 
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
