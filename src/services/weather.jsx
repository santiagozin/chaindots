import axios from 'axios';

export const getWeather = async (city) => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: { q: city,
        days: 5
       },
      headers: {
        'x-rapidapi-key': '94b8e36ea4mshb18bb4c16afbb70p1d6ebfjsnc39ab533f0e3',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    throw error;
  }
};



  