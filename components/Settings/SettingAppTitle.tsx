import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColors } from "../../hooks/useColors";

const SettingAppTitle = () => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.appText, { color: colors.textDark }]}>
        App Settings
      </Text>
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
  },
});
