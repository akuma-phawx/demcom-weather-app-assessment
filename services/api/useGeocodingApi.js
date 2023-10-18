import axios from "axios";
import { API_OPENWEATHERMAP_KEY } from "@env";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCityCoordinates = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: cityName,
        appid: API_OPENWEATHERMAP_KEY,
      },
    });

    const { coord } = response.data;
    return coord;
  } catch (error) {
    throw error;
  }
};
