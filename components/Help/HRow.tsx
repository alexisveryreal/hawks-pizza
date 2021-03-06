import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SEMI } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';

type HRowProps = {
  label: string;
};

const HRow = ({ label }: HRowProps) => {
  const { colors } = useColors();

  return (
    <View style={styles.rowWrapper}>
      <Text style={[styles.rowLabel, { color: colors.textDark }]}>{label}</Text>
      <TouchableOpacity onPress={() => console.log('woo pressed on ', label)}>
        <Feather name="chevron-right" size={25} color={colors.textDark} />
      </TouchableOpacity>
    </View>
  );
};

export default HRow;

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  rowLabel: {
    fontSize: 14,
    fontFamily: SEMI,
  },
});
