import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeScreenNavigation } from "../../screens/Home";
import { PopularSodaData } from "../../assets/data/popularSodaData";

type PopularSodaCardProps = {
  navigation: HomeScreenNavigation;
  item: PopularSodaData;
};

const PopularSodaCard = ({ navigation, item }: PopularSodaCardProps) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default PopularSodaCard;

const styles = StyleSheet.create({});
