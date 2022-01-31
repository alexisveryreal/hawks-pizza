import React from "react";

/* REACT NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* DATA */
import { PopularData } from "./assets/data/popularData";

/* SCREENS */
import Home from "./screens/Home";
import Details from "./screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: PopularData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
