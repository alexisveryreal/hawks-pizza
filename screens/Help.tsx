import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { HelpScreenProps } from "../types/Help/HelpTypes";
import BackButton from "../components/BackButton";

const Help = ({ navigation, route }: HelpScreenProps) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
