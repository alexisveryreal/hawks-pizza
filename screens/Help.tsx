import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelpRows, HelpTitle } from '../components';
import BackButton from '../components/BackButton';
import { useColors } from '../hooks/useColors';
import { HelpScreenProps } from '../types/Help/HelpTypes';

const Help = ({ navigation, route }: HelpScreenProps) => {
  const { colors } = useColors();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <BackButton navigation={navigation} />
      <HelpTitle />
      <HelpRows />
    </SafeAreaView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
