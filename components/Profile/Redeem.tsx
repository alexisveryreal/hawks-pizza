import React from 'react';
import { StyleSheet, View } from 'react-native';

import popularData from '../../assets/data/popularData';
import RedeemCard from './RedeemCard';

const Redeem = () => {
  return (
    <View style={styles.redeemWrapper}>
      {popularData.map((item) => (
        <RedeemCard key={item.id} item={item} />
      ))}
    </View>
  );
};

export default Redeem;

const styles = StyleSheet.create({
  redeemWrapper: {
    paddingHorizontal: 20,
  },
});
