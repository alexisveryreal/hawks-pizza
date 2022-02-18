import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { ProfileScreenNavigation } from '../../screens/Profile';

type ProfileHeaderProps = {
  navigation: ProfileScreenNavigation;
};

const ProfileHeader = ({ navigation }: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeaderWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.profileHeaderLeft}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profileHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeaderLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  profileHeaderRight: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerRightText: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    color: colors.textDark,
  },
});
