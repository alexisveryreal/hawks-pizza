import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { PopularData } from '../../assets/data/popularData';
import IngredientsItem from './IngredientsItem';

type IngredientsProps = {
  ingredients: PopularData['ingredients'];
};

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <View style={styles.ingredientsWrapper}>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <View style={styles.ingredientsListWrapper}>
        <FlatList
          data={ingredients}
          renderItem={({ item }) => <IngredientsItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
});
