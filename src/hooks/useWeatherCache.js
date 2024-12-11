import useSWR from 'swr';
import { getWeather } from '../services/weather';

const CACHE_TIME = 1000 * 60 * 30; // 30 minutos
const STALE_TIME = 1000 * 60 * 5;  // 5 minutos

export const useWeatherCache = (city) => {
  const { data, error, isLoading, mutate } = useSWR(
    city ? `weather/${city}` : null,
    () => getWeather(city),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: STALE_TIME,
      refreshInterval: CACHE_TIME,
      errorRetryCount: 3
    }
  );

  return {
    weatherData: data,
    isLoading,
    isError: error,
    refreshData: mutate
  };
}; 