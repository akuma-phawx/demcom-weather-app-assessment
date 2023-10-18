// HourlyWeatherScreen.js
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getCityCoordinates } from "../../services/api/useGeocodingApi";
import { getHourlyWeather } from "../../services/api/useForecastApi";

export default function HourlyWeatherScreen({ route }) {
  const { city } = route.params;
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    getCityCoordinates(city)
      .then((coord) => setCoordinates(coord))
      .catch((error) => console.error("Error fetching coordinates: ", error));
  }, [city]);
  useEffect(() => {
    getHourlyWeather(coordinates.lon, coordinates.lat)
      .then((res) => console.log(res))
      .catch((error) =>
        console.error("Error fetching hourly weather: ", error)
      );
  }, [city]);
  return (
    <View>
      <Text>
        Hourly Weather Coordinates: Lat: {coordinates.lat}, Lon:{" "}
        {coordinates.lon}
      </Text>
    </View>
  );
}
