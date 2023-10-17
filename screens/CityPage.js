import React from "react";
import { View, Text } from "react-native";

// TODO: Create City Page
export default function CityPage({ route }) {
  const { city } = route.params;
  return (
    <View>
      <Text>Selected city: {city}</Text>
    </View>
  );
}
