import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import CatgoryItem from "./CatgoryItem";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import categoriesData, { CategoriesObj } from "../assets/data/categoriesData";

const Categories = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={({ item }: ListRenderItemInfo<CategoriesObj>) => (
            <CatgoryItem item={item} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});
