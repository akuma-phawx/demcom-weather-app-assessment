import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";
import cities from "../data/cities.json";

export default function MainPage({ navigation }) {
  const [city, setCity] = useState("Amsterdam");

  const showWeather = () => {
    navigation.navigate("CityPage", { city });
  };
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          {cities.map((city, index) => (
            <Picker.Item key={index} label={city} value={city}></Picker.Item>
          ))}
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Show Weather" onPress={showWeather} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  pickerContainer: {
    width: "80%", // Adjust the width as needed
    marginBottom: 20, // Add some margin for spacing
  },
  buttonContainer: {
    width: "auto",
  },
});
