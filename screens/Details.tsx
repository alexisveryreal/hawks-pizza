import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootStackParamList } from "../App";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Price from "../components/Price";
import DetailTitles from "../components/DetailTitles";
import DetailHeader from "../components/DetailHeader";

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
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
