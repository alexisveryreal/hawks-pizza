import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HelpScreenProps } from "../types/Help/HelpTypes";
import BackButton from "../components/BackButton";
import { HelpRows, HelpTitle } from "../components";
import { useColors } from "../hooks/useColors";

const Help = ({ navigation, route }: HelpScreenProps) => {
  const { colors } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BackButton navigation={navigation} />
      <HelpTitle />
      <HelpRows />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
