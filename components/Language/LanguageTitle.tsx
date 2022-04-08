import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const LanguageTitle = () => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.languageTitle, { color: colors.textDark }]}>
        Language
      </Text>
    </View>
  );
};

export default LanguageTitle;

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  languageTitle: {
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
  },
});
