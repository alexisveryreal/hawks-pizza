import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PopularTypes } from '../../atoms/popularAtom';
import { useColors } from '../../hooks/useColors';
import { HomeScreenNavigation } from '../../screens/Home';
import PopularCard from './PopularCard';
import PopularSodaCard from './PopularSodaCard';

type PopularProps = {
  navigation: HomeScreenNavigation;
  popularData: PopularTypes;
};

const Popular = ({ navigation, popularData }: PopularProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.popularWrapper}>
      <Text style={[styles.popularTitle, { color: colors.textDark }]}>
        Popular
      </Text>

      {popularData.kind === 'Pizza'
        ? popularData.data.map((item) => (
            <PopularCard item={item} navigation={navigation} key={item.id} />
          ))
        : popularData.data.map((item) => (
            <PopularSodaCard
              item={item}
              navigation={navigation}
              key={item.id}
            />
          ))}

      {popularData.data.length === 0 && <Text>Item not found :(</Text>}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  popularTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
  },
});
