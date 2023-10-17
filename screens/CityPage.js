import React from "react";
import { View, Text } from "react-native";
import Tabs from "../components/Tabs";

// TODO: Create City Page
export default function CityPage({ route }) {
  const { city } = route.params;
  return <Tabs />;
}
