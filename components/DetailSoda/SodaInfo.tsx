import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { PopularSodaData } from '../../assets/data/popularSodaData';
import SodaInfoText from './SodaInfoText';

type SodaInfoProps = {
  item: PopularSodaData;
};

const SodaInfo = ({ item }: SodaInfoProps) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.leftWrapper}>
        <SodaInfoText
          title="size"
          text={`${item.sizeName} ${item.sizeNumber}`}
        />
        <SodaInfoText title="Delivery in" text={`${item.deliveryTime} min`} />
      </View>
      <View>
        <Image source={item.image} style={styles.sodaImage} />
      </View>
    </View>
  );
};

export default SodaInfo;

const styles = StyleSheet.create({
  infoWrapper: {
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    paddingLeft: 20,
  },
  sodaImage: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
});
