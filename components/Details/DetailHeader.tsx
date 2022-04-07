import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

// need details navigation typed

import colors from '../../assets/colors/colors';
import { DetailScreenNavigation } from '../../screens/Details';

type DetailHeaderProps = {
  navigation: DetailScreenNavigation;
};

const DetailHeader = ({ navigation }: DetailHeaderProps) => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft}>
            <Feather name="chevron-left" size={15} color={colors.textDark} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons name="star" size={12} color={colors.white} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
});
