import React from "react";
import { LogBox } from "react-native";

/* EXTERNAL */
import { NativeBaseProvider } from "native-base";
import { RecoilRoot } from "recoil";

import "./translations/i18n";
import NavigationRoot from "./navigation/NavigationRoot";

// Ignore recoil timer warning
LogBox.ignoreLogs(["timer"]);

export default function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationRoot />
      </NativeBaseProvider>
    </RecoilRoot>
  );
}

/**
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
