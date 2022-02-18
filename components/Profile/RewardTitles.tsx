import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../assets/colors/colors';

const RewardTitles = () => {
  return (
    <View style={styles.titleWrapper}>
      <View style={styles.rewardsWrapper}>
        <Text style={styles.hawks}>Hawks</Text>
        <Text style={styles.rewards}>Rewards</Text>
      </View>
      <View style={styles.pointsWrapper}>
        <Text style={styles.points}>300</Text>
        <View style={styles.pointsTextWrapper}>
          <Text style={styles.pointsText}>POINTS</Text>
          <Text style={styles.expText}>EXP 2/3/22</Text>
        </View>
      </View>
    </View>
  );
};

export default RewardTitles;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rewardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hawks: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    paddingRight: 6,
    color: colors.textDark,
  },
  rewards: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  pointsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    paddingRight: 6,
    color: colors.textDark,
  },
  pointsTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pointsText: {
    fontSize: 12,
    fontFamily: 'Montserrat_600SemiBold',
    color: colors.textDark,
  },
  expText: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
    color: colors.textDark,
  },
});
