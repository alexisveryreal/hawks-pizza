import React from "react";

/* REACT NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PopularData } from "../assets/data/popularData";

/* Screens */
import {
  Home,
  Details,
  Profile,
  Settings,
  Help,
  Language,
  Notifications,
} from "../screens";
import { PopularSodaData } from "../assets/data/popularSodaData";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: PopularData | PopularSodaData };
  Profile: undefined;
  Settings: undefined;
  Language: undefined;
  Notifications: undefined;
  Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationRoot = () => {
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
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
