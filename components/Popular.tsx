import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { PopularData } from "../assets/data/popularData";

import PopularCard from "./PopularCard";

import { HomeScreenNavigation } from "../screens/Home";

type PopularProps = {
  navigation: HomeScreenNavigation;
  popularData: PopularData[];
};

const Popular = ({ navigation, popularData }: PopularProps) => {
  return (
    <View style={styles.popularWrapper}>
      <Text style={styles.popularTitle}>Popular</Text>
      {popularData.map((item) => (
        <PopularCard item={item} navigation={navigation} key={item.id} />
      ))}
      {popularData.length === 0 && <Text>Item not found :(</Text>}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
});
