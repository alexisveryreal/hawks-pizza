import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const LanguageTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.languageTitle}>Language</Text>
    </View>
  );
};

export default LanguageTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  languageTitle: {
    fontSize: 32,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
  },
});
