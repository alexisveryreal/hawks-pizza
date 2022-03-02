/* REACT NAVIGATION */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { PopularData } from '../assets/data/popularData';
import { PopularSodaData } from '../assets/data/popularSodaData';
/* Screens */
import {
  Home,
  Details,
  Profile,
  Settings,
  Help,
  Language,
  Notifications,
  DetailSoda,
} from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Details: { item: PopularData };
  Profile: undefined;
  Settings: undefined;
  Language: undefined;
  Notifications: undefined;
  Help: undefined;
  DetailSoda: { item: PopularSodaData };
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
        <Stack.Screen
          name="DetailSoda"
          component={DetailSoda}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
