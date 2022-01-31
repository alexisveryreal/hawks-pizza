import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootStackParamList } from "../App";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Price from "../components/Price";
import DetailTitles from "../components/DetailTitles";
import DetailHeader from "../components/DetailHeader";
import PizzaInfo from "../components/PizzaInfo";
import Ingredients from "../components/Ingredients";
import colors from "../assets/colors/colors";
import PlaceOrderButton from "../components/PlaceOrderButton";

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

export type DetailScreenNavigation = DetailScreenProps["navigation"];

const Details = ({ navigation, route }: DetailScreenProps) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} />
      <DetailTitles item={item} />
      <Price item={item} />
      <PizzaInfo item={item} />
      <Ingredients ingredients={item.ingredients} />
      <PlaceOrderButton />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
