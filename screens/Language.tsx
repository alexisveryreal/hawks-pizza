import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../assets/colors/colors';
import {
  LanguageSearch,
  LanguageSelect,
  LanguageTitle,
  ShowMore,
} from '../components';
import BackButton from '../components/BackButton';
import { useColors } from '../hooks/useColors';
import { RootStackParamList } from '../navigation/NavigationRoot';

type LanguageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Language'
>;

export type LanguageNavigation = LanguageScreenProps['navigation'];

const Language = ({ navigation, route }: LanguageScreenProps) => {
  const { colors } = useColors();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <BackButton navigation={navigation} />
      <LanguageTitle />
      <LanguageSearch />
      <LanguageSelect />
      <ShowMore />
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
