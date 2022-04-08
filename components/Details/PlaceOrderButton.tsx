import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const PlaceOrderButton = () => {
  const { colors } = useColors();
  return (
    <TouchableOpacity onPress={() => alert('your order has been placed')}>
      <View style={[styles.orderWrapper, { backgroundColor: colors.primary }]}>
        <Text style={styles.orderText}>Place an Order</Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default PlaceOrderButton;

const styles = StyleSheet.create({
  orderWrapper: {
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    marginRight: 10,
  },
});
