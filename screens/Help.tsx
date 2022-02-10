import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { HelpScreenProps } from "../types/Help/HelpTypes";
import BackButton from "../components/BackButton";
import { HelpRows, HelpTitle } from "../components";

const Help = ({ navigation, route }: HelpScreenProps) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <HelpTitle />
      <HelpRows />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
