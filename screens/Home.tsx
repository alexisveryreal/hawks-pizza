import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import Header from "../components/Header";
import Titles from "../components/Titles";
import Search from "../components/Search";
import Categories from "../components/Categories";

const Home = () => {
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
      <Header />
      <Titles />
      <Search />
      <Categories />
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
