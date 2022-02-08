import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const SettingAppTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.appText}>App Settings</Text>
    </View>
  );
};

export default SettingAppTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  appText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
  },
});
