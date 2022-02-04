import React from "react";
import colors from "../../assets/colors/colors";
import { StyleSheet, Text, View } from "react-native";

const HomeTitles = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.subTitle}>Food</Text>
      <Text style={styles.mainTitle}>Delivery</Text>
    </View>
  );
};

export default HomeTitles;

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: colors.textDark,
  },
  mainTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: colors.textDark,
  },
});
