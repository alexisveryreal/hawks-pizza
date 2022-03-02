import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PopularSodaData } from '../../assets/data/popularSodaData';
import { BOLD, SEMI } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';

type DetailSodaTitleProps = {
  item: PopularSodaData;
};

const DetailSodaTitle = ({ item }: DetailSodaTitleProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.title, { color: colors.textDark }]}>
        {item.title}
      </Text>
      <View style={styles.priceWrapper}>
        <Text style={[styles.price, { color: colors.price }]}>
          ${item.price}
        </Text>
      </View>
    </View>
  );
};

export default DetailSodaTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: BOLD,
    fontSize: 32,
    width: '55%',
  },
  priceWrapper: {
    marginTop: 60,
  },
  price: {
    fontFamily: SEMI,
    fontSize: 32,
  },
});
