import React from 'react';
import { StyleSheet, View } from 'react-native';

import HRow from './HRow';

const HelpRows = () => {
  return (
    <View style={styles.rowWrapper}>
      <HRow label="Report a Problem" />
      <HRow label="Help Center" />
      <HRow label="Privacy and Security Help" />
      <HRow label="Support Requests" />
    </View>
  );
};

export default HelpRows;

const styles = StyleSheet.create({
  rowWrapper: {
    paddingHorizontal: 20,
  },
});
