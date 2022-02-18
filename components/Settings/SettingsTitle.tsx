import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const SettingsTitle = () => {
  const { colors } = useColors();

  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.tileText, { color: colors.textDark }]}>
        Settings
      </Text>
    </View>
  );
};

export default SettingsTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  tileText: {
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
  },
});
