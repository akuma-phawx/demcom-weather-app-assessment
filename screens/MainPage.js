import React, { useState } from "react";
import { View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import cities from "../data/cities.json";

function MainPage({ navigation }) {
  const [city, setCity] = useState("Amsterdam");

  const showWeather = () => {
    navigation.navigate("CityPage", { city });
  };
  return (
    <View>
      <Picker
        selectedValue={city}
        onValueChange={(itemValue) => setCity(itemValue)}
      >
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city}></Picker.Item>
        ))}
      </Picker>
      <Button title="Show Weather" onPress={showWeather} />
    </View>
  );
}

export default MainPage;
