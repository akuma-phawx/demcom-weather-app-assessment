import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const cities = ["Amsterdam", "Athens", "Paris", "Berlin"];

function MainPage({ navigation }) {
  const [city, setCity] = useState("Amsterdam");
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
    </View>
  );
}

export default MainPage;
