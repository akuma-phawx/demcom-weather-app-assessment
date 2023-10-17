import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HourlyWeatherScreen from "../screens/city/HourlyWeatherScreen";
import SevenDayForecastScreen from "../screens/city/SevenDayForecastScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hourly Weather" component={HourlyWeatherScreen} />
      <Tab.Screen name="7 Day Forecast" component={SevenDayForecastScreen} />
    </Tab.Navigator>
  );
}
