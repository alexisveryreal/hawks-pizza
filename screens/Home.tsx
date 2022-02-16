import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";
import { useRecoilValue } from "recoil";
import popularState, { PopularTypes } from "../atoms/popularAtom";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import {
  HomeHeader,
  HomeTitles,
  Search,
  Categories,
  Popular,
} from "../components";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/NavigationRoot";

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

  const popularDataState = useRecoilValue(popularState);

  console.log(popularDataState);

  const [popular] = useState<PopularTypes>(popularDataState);
  const [filteredData, setFilteredData] =
    useState<PopularTypes>(popularDataState);
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
});
