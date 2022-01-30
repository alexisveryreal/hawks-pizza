import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

const Search = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
});
