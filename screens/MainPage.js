import React from "react";
import { View, Text, Button } from "react-native";

function MainPage({ navigation }) {
  return (
    <View>
      <Text>Main Page</Text>
      <Button
        title="Go to City Page"
        onPress={() => {
          navigation.navigate("CityPage");
        }}
      />
    </View>
  );
}

export default MainPage;
