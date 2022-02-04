import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors/colors";
import { PopularData } from "../../assets/data/popularData";

type PriceProps = {
  item: PopularData;
};

const Price = ({ item }: PriceProps) => {
  return (
    <View style={styles.priceWrapper}>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
  },
});
