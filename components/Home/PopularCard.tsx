import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// import colors from '../../assets/colors/colors';
import { PopularData } from '../../assets/data/popularData';
import { useColors } from '../../hooks/useColors';
import { HomeScreenNavigation } from '../../screens/Home';

type PopularCardProps = {
  item: PopularData;
  navigation: HomeScreenNavigation;
};

const PopularCard = ({ item, navigation }: PopularCardProps) => {
  const { colors } = useColors();

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigation.navigate('Details', {
          item,
        })
      }
    >
      <View
        style={[
          styles.popularCardWrapper,
          {
            marginTop: item.id === '1' ? 10 : 20,
            backgroundColor: colors.white,
            shadowColor: colors.black,
          },
        ]}
      >
        <View>
          <View>
            <View style={styles.popularTopWrapper}>
              <MaterialCommunityIcons
                name="crown"
                size={12}
                color={colors.primary}
              />
              <Text style={[styles.popularTopText, { color: colors.textDark }]}>
                top of the week
              </Text>
            </View>
            <View style={styles.popularTitlesWrapper}>
              <Text
                style={[styles.popularTitlesTitle, { color: colors.textDark }]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.popularTitlesWeight,
                  { color: colors.textLight },
                ]}
              >
                Weight {item.weight}
              </Text>
            </View>
          </View>
          <View style={styles.popularCardBottom}>
            <View
              style={[
                styles.addPizzaButton,
                { backgroundColor: colors.primary },
              ]}
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
        <View style={styles.popularCardRight}>
          <Image source={item.image} style={styles.popularCardImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  popularCardWrapper: {
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
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
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
