import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { PopularData } from '../../assets/data/popularData';
import { useColors } from '../../hooks/useColors';

type PriceProps = {
  item: PopularData;
};

const Price = ({ item }: PriceProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.priceWrapper}>
      <Text style={[styles.priceText, { color: colors.price }]}>
        {item.price}
      </Text>
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
    fontFamily: 'Montserrat_700Bold',
    fontSize: 32,
  },
});
