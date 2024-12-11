
import { Navigate } from 'react-router-dom';
import { useWeather } from '../../hook/useWeather';

const ProtectedRoute = ({ children }) => {
  const { dataWeather } = useWeather();

  if (!dataWeather || dataWeather.length === 0) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;