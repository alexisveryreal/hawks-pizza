import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { PopularData } from "../../assets/data/popularData";

import PopularCard from "./PopularCard";

import { HomeScreenNavigation } from "../../screens/Home";
import { PopularSodaData } from "../../assets/data/popularSodaData";
import { PopularTypes } from "../../atoms/popularAtom";
import PopularSodaCard from "./PopularSodaCard";

type PopularProps = {
  navigation: HomeScreenNavigation;
  popularData: PopularTypes;
};

const Popular = ({ navigation, popularData }: PopularProps) => {
  return (
    <View style={styles.popularWrapper}>
      <Text style={styles.popularTitle}>Popular</Text>

      {popularData.kind === "Pizza"
        ? popularData.data.map((item) => (
            <PopularCard item={item} navigation={navigation} key={item.id} />
          ))
        : popularData.data.map((item) => (
            <PopularSodaCard
              item={item}
              navigation={navigation}
              key={item.id}
            />
          ))}

      {popularData.data.length === 0 && <Text>Item not found :(</Text>}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  popularTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
});
