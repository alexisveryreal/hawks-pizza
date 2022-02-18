import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HelpRows, HelpTitle } from '../components';
import BackButton from '../components/BackButton';
import { useColors } from '../hooks/useColors';
import { HelpScreenProps } from '../types/Help/HelpTypes';

const Help = ({ navigation, route }: HelpScreenProps) => {
  const { colors } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BackButton navigation={navigation} />
      <HelpTitle />
      <HelpRows />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
