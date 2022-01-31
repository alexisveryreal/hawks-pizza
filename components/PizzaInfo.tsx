import React from "react";
import { Image, StyleSheet, View } from "react-native";

import PizzaInfoText from "./PizzaInfoText";

import { PopularData } from "../assets/data/popularData";

type PizzaInfoProps = {
  item: PopularData;
};

const PizzaInfo = ({ item }: PizzaInfoProps) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoLeftWrapper}>
        <PizzaInfoText
          title="Size"
          text={`${item.sizeName} ${item.sizeNumber}`}
        />
        <PizzaInfoText title="Crust" text={item.crust} />
        <PizzaInfoText title="Delivery in" text={`${item.deliveryTime} min`} />
      </View>
      <View>
        <Image source={item.image} style={styles.itemImage} />
      </View>
    </View>
  );
};

export default PizzaInfo;

const styles = StyleSheet.create({
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
});
