import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Header from "../components/Header";
import Titles from "../components/Titles";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Popular from "../components/Popular";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type HomeScreenNavigation = HomeScreenProps["navigation"];

const Home = ({ navigation, route }: HomeScreenProps) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Titles />
        <Search />
        <Categories />
        <Popular navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textStyle: {
    fontFamily: "Montserrat_500Medium",
    color: colors.secondary,
  },
});
