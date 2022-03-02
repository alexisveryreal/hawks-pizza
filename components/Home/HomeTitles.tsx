import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const HomeTitles = () => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.subTitle, { color: colors.textDark }]}>Food</Text>
      <Text style={[styles.mainTitle, { color: colors.textDark }]}>
        Delivery
      </Text>
    </View>
  );
};

export default HomeTitles;

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
  },
  mainTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 32,
  },
});
