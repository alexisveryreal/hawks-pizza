import React from "react";

/* REACT NAVIGATION */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* DATA */
import { PopularData } from "./assets/data/popularData";

/* SCREENS */
import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: PopularData };
  Profile: undefined;
  Settings: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * TODO: Make Search an actual input
 * * -> Will need to search through popular data
 * TODO: Make Menu button in top right clickable
 * * -> Will be a profile page
 * TODO: Make Category Cards Clickable
 * * -> Just shows all popular data
 * * ---> Will need to create popular data for seafood and drinks
 * TODO: (In Details Page), Make top right icon save
 * * -> Create a favorites page under hambuger menu
 * TODO: Make Place Order connect with a backend
 * * -> on place order creates order in backend
 * * -> Need a (your order) page in hamburger menu
 * * ---> should be able to edit order, delete/cancel order
 */
