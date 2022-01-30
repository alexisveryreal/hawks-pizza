import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";

const Titles = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.subTitle}>Food</Text>
      <Text style={styles.mainTitle}>Delivery</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: colors.textDark,
  },
  mainTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: colors.textDark,
  },
});
