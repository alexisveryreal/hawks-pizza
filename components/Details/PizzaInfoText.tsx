import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

type PizzaInfoTextProps = {
  title: string;
  text: string;
};

const PizzaInfoText = ({ title, text }: PizzaInfoTextProps) => {
  return (
    <View style={styles.infoItemWrapper}>
      <Text style={styles.infoItemTitle}>{title}</Text>
      <Text style={styles.infoItemText}>{text}</Text>
    </View>
  );
};

export default PizzaInfoText;

const styles = StyleSheet.create({
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: colors.textDark,
  },
});
