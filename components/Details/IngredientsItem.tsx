import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ingredients } from "../../assets/data/popularData";
import colors from "../../assets/colors/colors";

type IngredientsItemProps = {
  item: Ingredients;
};

const IngredientsItem = ({ item }: IngredientsItemProps) => {
  return (
    <View
      style={[
        styles.ingredientsItemWrapper,
        {
          marginLeft: item.id === "1" ? 20 : 0,
        },
      ]}
    >
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );
};

export default IngredientsItem;

const styles = StyleSheet.create({
  ingredientsItemWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 2,
  },
  ingredientImage: {
    resizeMode: "contain",
  },
});
