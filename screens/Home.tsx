import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import HomeHeader from "../components/Home/HomeHeader";
import HomeTitles from "../components/Home/HomeTitles";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import Popular from "../components/Home/Popular";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

import popularData from "../assets/data/popularData";

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

  const [popular] = useState(popularData);
  const [filteredData, setFilteredData] = useState(popularData);
  const hasFiltered = filteredData !== popular;
  console.log(hasFiltered);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader navigation={navigation} />
        <HomeTitles />
        <Search originalPopular={popular} setFilteredData={setFilteredData} />
        {!hasFiltered && <Categories />}
        <Popular popularData={filteredData} navigation={navigation} />
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
