import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../assets/colors/colors';
import {
  Price,
  DetailTitles,
  DetailHeader,
  PizzaInfo,
  Ingredients,
  PlaceOrderButton,
} from '../components';
import { RootStackParamList } from '../navigation/NavigationRoot';

export type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type DetailScreenNavigation = DetailScreenProps['navigation'];

const Details = ({ navigation, route }: DetailScreenProps) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} />
      <DetailTitles item={item} />
      <Price item={item} />
      <PizzaInfo item={item} />
      <Ingredients ingredients={item.ingredients} />
      <PlaceOrderButton />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
