import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../assets/colors/colors';

type DividerProps = {
  space?: number;
  height?: number;
};

const Divider = ({ space, height }: DividerProps) => {
  return (
    <View style={[styles.dividerWrapper, { paddingHorizontal: space ?? 5 }]}>
      <View style={[styles.divider, { height: height ?? 10 }]} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  dividerWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  divider: {
    borderLeftWidth: 1,
    color: colors.textDark,
  },
});
