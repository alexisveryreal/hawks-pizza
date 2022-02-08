import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const SettingsTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.tileText}>Settings</Text>
    </View>
  );
};

export default SettingsTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  tileText: {
    fontSize: 32,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
  },
});
