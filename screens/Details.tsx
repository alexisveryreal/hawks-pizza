import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <DetailHeader navigation={navigation} />
        <DetailTitles item={item} />
        <Price item={item} />
        <PizzaInfo item={item} />
        <Ingredients ingredients={item.ingredients} />
        <PlaceOrderButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
