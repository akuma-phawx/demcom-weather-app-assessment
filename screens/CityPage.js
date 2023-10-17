import React, { Fragment, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HourlyWeatherScreen from "../screens/city/HourlyWeatherScreen";
import SevenDayForecastScreen from "../screens/city/SevenDayForecastScreen";

const Tab = createBottomTabNavigator();
import { Text } from "react-native";
import { getCityCoordinates } from "../services/api/useGeocodingApi";

export default function CityPage({ route }) {
  const { city } = route.params;
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    // Fetch the city coordinates when the component mounts
    getCityCoordinates(city)
      .then((coord) => setCoordinates(coord))
      .catch((error) => console.error("Error fetching coordinates: ", error));
  }, [city]);

  return (
    <Fragment>
      <Text>
        Coordinates: Lat: {coordinates.lat}, Lon: {coordinates.lon}
      </Text>
      <Tab.Navigator>
        <Tab.Screen name="Hourly Weather" component={HourlyWeatherScreen} />
        <Tab.Screen name="7 Day Forecast" component={SevenDayForecastScreen} />
      </Tab.Navigator>
    </Fragment>
  );
}
