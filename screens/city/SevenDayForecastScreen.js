// SevenDayForecastScreen.js
import React from "react";
import { View, Text } from "react-native";

export default function SevenDayForecastScreen({ route }) {
  const { coordinates } = route.params;
  return (
    <View>
      <Text>
        7-day Forecast Coordinates: Lat: {coordinates.lat}, Lon:{" "}
        {coordinates.lon}
      </Text>
    </View>
  );
}
