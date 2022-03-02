import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEDIUM, SEMI } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';

type SodaInfoTextProps = {
  title: string;
  text: string;
};

const SodaInfoText = ({ title, text }: SodaInfoTextProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.textWrapper}>
      <Text style={[styles.title, { color: colors.textLight }]}>{title}</Text>
      <Text style={[styles.text, { color: colors.textDark }]}>{text}</Text>
    </View>
  );
};

export default SodaInfoText;

const styles = StyleSheet.create({
  textWrapper: {
    marginBottom: 20,
  },
  title: {
    fontFamily: MEDIUM,
    fontSize: 14,
  },
  text: {
    fontFamily: SEMI,
    fontSize: 16,
  },
});
