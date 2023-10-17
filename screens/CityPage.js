import React from "react";
import { View, Text } from "react-native";

function CityPage({ route }) {
  const { city } = route.params;
  return (
    <View>
      <Text>Selected city: {city}</Text>
    </View>
  );
}

export default CityPage;
