import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../hooks/useColors';
import { DetailSodaScreenNav } from '../../screens/DetailSoda';

type DetailSodaHeaderProps = {
  navigation: DetailSodaScreenNav;
};

const DetailSodaHeader = ({ navigation }: DetailSodaHeaderProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.headerLeft, { borderColor: colors.textLight }]}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.headerRight,
          { backgroundColor: colors.primary, borderColor: colors.primary },
        ]}
      >
        <MaterialCommunityIcons name="star" size={12} color={colors.white} />
      </View>
    </View>
  );
};

export default DetailSodaHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
  },
});
