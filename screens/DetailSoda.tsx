import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DSHeader, DSTitle, PlaceOrderButton, SodaInfo } from '../components';
import { useColors } from '../hooks/useColors';
import { RootStackParamList } from '../navigation/NavigationRoot';

export type DetailSodaScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailSoda'
>;

export type DetailSodaScreenNav = DetailSodaScreenProps['navigation'];

const DetailSoda = ({ navigation, route }: DetailSodaScreenProps) => {
  const { colors } = useColors();
  const { item } = route.params;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <DSHeader navigation={navigation} />
      <DSTitle item={item} />
      <SodaInfo item={item} />
      <PlaceOrderButton />
    </SafeAreaView>
  );
};

export default DetailSoda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
