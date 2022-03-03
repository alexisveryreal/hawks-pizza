import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { useRecoilState } from 'recoil';

import { CategoriesObj } from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';
import popularSodaData from '../../assets/data/popularSodaData';
import categoryState from '../../atoms/categoriesAtom';
import popularState from '../../atoms/popularAtom';
import { useColors } from '../../hooks/useColors';
import arrayUtils from '../../utils/arrayUtils';
import CatgoryItem from './CatgoryItem';

const Categories = () => {
  const [categoryStateData, setCategoryStateData] =
    useRecoilState(categoryState);
  const [popularStateData, setPopularStateData] = useRecoilState(popularState);

  const { colors } = useColors();

  // console.log('Popular state Data: ', popularStateData);

  const handlePopularState = (name: string) => {
    switch (name) {
      case 'Pizza':
      case 'Seafood':
        setPopularStateData({ kind: 'Pizza', data: popularData });
        break;
      case 'Soft Drinks':
        console.log('Setting popular state to sodaData');
        setPopularStateData({ kind: 'Soda', data: popularSodaData });
        break;
    }
  };

  // Sets the currently selected false
  // sets the passed in id, as selected = true
  const handleChangeData = (id: string) => {
    const oldSelectedIndex = categoryStateData.findIndex(
      (value) => value.selected === true,
    );
    const unSelectTemp = arrayUtils.replaceItemAtIndex<CategoriesObj>(
      categoryStateData,
      oldSelectedIndex,
      { ...categoryStateData[oldSelectedIndex], selected: false },
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
      <Text style={[styles.categoriesTitle, { color: colors.textDark }]}>
        Categories
      </Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoryStateData}
          renderItem={({ item }: ListRenderItemInfo<CategoriesObj>) => (
            <CatgoryItem item={item} onPress={handleChangeData} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
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
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
});
