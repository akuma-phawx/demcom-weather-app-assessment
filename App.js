import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./screens/MainPage";
import CityPage from "./screens/CityPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen
          name="CityPage"
          component={CityPage}
          options={({ route }) => ({
            title: route.params.city, // Set the title based on the city param
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// TODO: Use this styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
