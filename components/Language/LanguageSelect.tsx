import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const LanguageSelect = () => {
  return (
    <View style={styles.selectWrapper}>
      <View style={styles.languageRow}>
        <Text style={styles.languageText}>English - English</Text>
      </View>
    </View>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  selectWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageText: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.textDark,
  },
  radioWrapper: {},
  radio: {},
});
