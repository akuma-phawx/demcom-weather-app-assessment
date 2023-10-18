import axios from "axios";
import { API_OPENWEATHERMAP_KEY } from "@env";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getHourlyWeather = async (lon, lat) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_OPENWEATHERMAP_KEY,
      },
    });

    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSevenDayForecast = async (lon, lat) => {};
