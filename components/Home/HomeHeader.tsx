import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors/colors';
import useProfile from '../../hooks/useProfile';
import { HomeScreenNavigation } from '../../screens/Home';

type HomeHeaderProps = {
  navigation: HomeScreenNavigation;
};

const HomeHeader = ({ navigation }: HomeHeaderProps) => {
  const { getProfile, isLoading } = useProfile('620c7ed6abdcc54ef6d2f01f');

  useEffect(() => {
    getProfile();
  }, []);

  if (isLoading) {
    console.log('Loading...');
  }

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImg}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Feather name="menu" size={24} color={colors.textDark} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
