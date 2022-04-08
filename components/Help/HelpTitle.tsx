import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BOLD } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';

const HelpTitle = () => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.title, { color: colors.textDark }]}>Help</Text>
      <Text style={[{ color: colors.textDark }]}>
        Let's pretend these buttons do something
      </Text>
    </View>
  );
};

export default HelpTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: BOLD,
  },
});
