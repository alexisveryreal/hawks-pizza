import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { useColors } from '../../hooks/useColors';

type PizzaInfoTextProps = {
  title: string;
  text: string;
};

const PizzaInfoText = ({ title, text }: PizzaInfoTextProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.infoItemWrapper}>
      <Text style={[styles.infoItemTitle, { color: colors.textLight }]}>
        {title}
      </Text>
      <Text style={[styles.infoItemText, { color: colors.textDark }]}>
        {text}
      </Text>
    </View>
  );
};

export default PizzaInfoText;

const styles = StyleSheet.create({
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
});
