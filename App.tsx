import React from "react";
import { LogBox } from "react-native";

/* EXTERNAL */
import { RecoilRoot } from "recoil";

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
import ProfileEdit from "./screens/ProfileEdit";
import Language from "./screens/Language";
import Notifications from "./screens/Notifications";
import Help from "./screens/Help";

export type RootStackParamList = {
  Home: undefined;
  Details: { item: PopularData };
  Profile: undefined;
  ProfileEdit: undefined;
  Settings: undefined;
  Language: undefined;
  Notifications: undefined;
  Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Ignore recoil timer warning
LogBox.ignoreLogs(["timer"]);

export default function App() {
  return (
    <RecoilRoot>
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
            name="ProfileEdit"
            component={ProfileEdit}
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
    </RecoilRoot>
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
