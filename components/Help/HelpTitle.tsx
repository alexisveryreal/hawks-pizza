import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { BOLD } from '../../constants/strings';

const HelpTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Help</Text>
      <Text>Let's pretend these buttons do something</Text>
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
    color: colors.textDark,
  },
});
