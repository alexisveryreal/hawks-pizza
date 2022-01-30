import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { CategoriesObj } from "../assets/data/categoriesData";

import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

type CategoryItemProps = {
  item: CategoriesObj;
};

const CatgoryItem = ({ item }: CategoryItemProps) => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
        },
      ]}
    >
      <Image source={item.image} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categorySelectWrapper,
          {
            backgroundColor: item.selected ? colors.white : colors.secondary,
            marginLeft: item.id === "1" ? 20 : 0,
          },
        ]}
      >
        <Feather
          name="chevron-right"
          size={8}
          color={item.selected ? colors.black : colors.white}
          style={styles.categorySelectIcon}
        />
      </View>
    </View>
  );
};

export default CatgoryItem;

const styles = StyleSheet.create({
  categoryItemWrapper: {
    backgroundColor: "#F5CA48",
    borderRadius: 20,
    marginRight: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
});
