import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import CatgoryItem from "./CatgoryItem";
import { CategoriesObj } from "../../assets/data/categoriesData";
import arrayUtils from "../../utils/arrayUtils";
import { useRecoilState } from "recoil";
import popularState, { PopularTypes } from "../../atoms/popularAtom";
import popularSodaData from "../../assets/data/popularSodaData";
import popularData from "../../assets/data/popularData";

import categoryState from "../../atoms/categoriesAtom";

const Categories = () => {
  const [categoryStateData, setCategoryStateData] =
    useRecoilState(categoryState);
  const [popularStateData, setPopularStateData] = useRecoilState(popularState);

  console.log("Popular state Data: ", popularStateData);

  const handlePopularState = (name: string) => {
    switch (name) {
      case "Pizza":
      case "Seafood":
        setPopularStateData({ kind: "Pizza", data: popularData });
        break;
      case "Soft Drinks":
        console.log("Setting popular state to sodaData");
        const temp: PopularTypes = { kind: "Soda", data: popularSodaData };
        console.log("TEMP: ", temp);
        setPopularStateData(temp);
        break;
    }
  };

  // Sets the currently selected false
  // sets the passed in id, as selected = true
  const handleChangeData = (id: string) => {
    const oldSelectedIndex = categoryStateData.findIndex(
      (value) => value.selected === true
    );
    const unSelectTemp = arrayUtils.replaceItemAtIndex<CategoriesObj>(
      categoryStateData,
      oldSelectedIndex,
      { ...categoryStateData[oldSelectedIndex], selected: false }
    );
    const newIndex = Number(id) - 1;
    const temp = arrayUtils.replaceItemAtIndex(unSelectTemp, newIndex, {
      ...unSelectTemp[newIndex],
      selected: true,
    });

    handlePopularState(temp[newIndex].title);
    setCategoryStateData(temp);
  };
  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoryStateData}
          renderItem={({ item }: ListRenderItemInfo<CategoriesObj>) => (
            <CatgoryItem item={item} onPress={handleChangeData} />
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
