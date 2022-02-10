import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BackButton from "../components/BackButton";
import { RootStackParamList } from "../navigation/NavigationRoot";

import {
  LanguageSearch,
  LanguageSelect,
  LanguageTitle,
  ShowMore,
} from "../components";

type LanguageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Language"
>;

export type LanguageNavigation = LanguageScreenProps["navigation"];

const Language = ({ navigation, route }: LanguageScreenProps) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <LanguageTitle />
      <LanguageSearch />
      <LanguageSelect />
      <ShowMore />
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
