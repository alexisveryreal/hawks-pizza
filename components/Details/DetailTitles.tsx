import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { PopularData } from '../../assets/data/popularData';
import { useColors } from '../../hooks/useColors';

type DetailTitlesProps = {
  item: PopularData;
};

const DetailTitles = ({ item }: DetailTitlesProps) => {
  const { colors } = useColors();

  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.title, { color: colors.textDark }]}>
        {item.title}
      </Text>
    </View>
  );
};

export default DetailTitles;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 32,
    width: '55%',
  },
});
