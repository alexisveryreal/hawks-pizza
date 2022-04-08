import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { PopularSodaData } from '../../assets/data/popularSodaData';
import { MEDIUM, SEMI } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';
import { HomeScreenNavigation } from '../../screens/Home';

type PopularSodaCardProps = {
  navigation: HomeScreenNavigation;
  item: PopularSodaData;
};

// TODO: navigate to detailsSoda page to keep them sep
// * also allows for easier change of design

const PopularSodaCard = ({ navigation, item }: PopularSodaCardProps) => {
  const { colors } = useColors();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailSoda', { item })}
    >
      <View
        style={[
          styles.cardWrapper,
          {
            marginTop: item.id === '1' ? 10 : 20,
            backgroundColor: colors.white,
            shadowColor: colors.black,
          },
        ]}
      >
        <View>
          <View>
            <View style={styles.topWrapper}>
              <MaterialCommunityIcons
                name="crown"
                size={12}
                color={colors.primary}
              />
              <Text style={[styles.topText, { color: colors.textDark }]}>
                top of the week
              </Text>
            </View>
            <View style={styles.titlesWrapper}>
              <Text style={[styles.titlesText, { color: colors.textDark }]}>
                {item.title}
              </Text>
              <Text style={[styles.titleSize, { color: colors.textLight }]}>
                {item.sizeNumber}
              </Text>
            </View>
          </View>
          <View style={styles.cardBottom}>
            <View
              style={[styles.addButton, { backgroundColor: colors.primary }]}
            >
              <Feather name="plus" size={10} color={colors.textDark} />
            </View>
            <View style={styles.ratingWrapper}>
              <MaterialCommunityIcons
                name="star"
                size={10}
                color={colors.textDark}
              />
              <Text style={[styles.rating, { color: colors.textDark }]}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardRight}>
          <Image source={item.image} style={styles.cardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularSodaCard;

const styles = StyleSheet.create({
  cardWrapper: {
    // background color
    borderRadius: 25,
    paddingTop: 25,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    // shadowColor
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    // marginBottom: 2,
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: {
    marginLeft: 10,
    fontFamily: SEMI,
    fontSize: 14,
  },
  titlesWrapper: {
    marginTop: 20,
  },
  titlesText: {
    fontFamily: SEMI,
    fontSize: 14,
  },
  titleSize: {
    fontFamily: MEDIUM,
    fontSize: 12,
    marginTop: 5,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addButton: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: SEMI,
    fontSize: 12,
    marginLeft: 5,
  },
  cardRight: {
    marginLeft: 40,
  },
  cardImage: {
    width: 210,
    height: 100,
    resizeMode: 'contain',
  },
});
