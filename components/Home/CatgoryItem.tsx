import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CategoriesObj } from '../../assets/data/categoriesData';
import { useColors } from '../../hooks/useColors';

type CategoryItemProps = {
  item: CategoriesObj;
  onPress: (id: string) => void;
};

const CatgoryItem = ({ item, onPress }: CategoryItemProps) => {
  const { colors } = useColors();
  return (
    <TouchableOpacity disabled={item.selected} onPress={() => onPress(item.id)}>
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id === '1' ? 20 : 0,
            shadowColor: colors.black,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={[styles.categoryItemTitle, { color: colors.textDark }]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}
        >
          <Feather
            name="chevron-right"
            size={12}
            color={item.selected ? colors.black : colors.white}
            style={styles.categorySelectIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CatgoryItem;

const styles = StyleSheet.create({
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    borderRadius: 20,
    marginRight: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 5,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
});
