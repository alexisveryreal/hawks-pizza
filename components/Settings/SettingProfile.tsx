import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../hooks/useColors';
import { SettingsScreenNavigation } from '../../screens/Settings';
import ForwardButton from './ForwardButton';

type SettingsProfileProps = {
  navigation: SettingsScreenNavigation;
};

const SettingProfile = ({ navigation }: SettingsProfileProps) => {
  const { colors } = useColors();

  return (
    <View style={styles.profileSectionWrapper}>
      <Text style={[styles.profileText, { color: colors.textDark }]}>
        Profile
      </Text>
      <View style={styles.profileInfoWrapper}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileUserWrapper}>
          <Text style={[styles.username, { color: colors.textDark }]}>
            Username
          </Text>
          <Text style={[styles.personalInfo, { color: colors.textLight }]}>
            Personal Info
          </Text>
        </View>
        <ForwardButton navigation={navigation} screenName="Profile" />
      </View>
    </View>
  );
};

export default SettingProfile;

const styles = StyleSheet.create({
  profileSectionWrapper: {
    paddingHorizontal: 20,
  },
  profileText: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  profileInfoWrapper: {
    flexDirection: 'row',
    // borderWidth: 1,
    paddingTop: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileUserWrapper: {
    paddingLeft: 15,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  personalInfo: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
});
