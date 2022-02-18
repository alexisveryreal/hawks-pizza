import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ProfileTitles } from '../components';
import BackButton from '../components/BackButton';
import { useColors } from '../hooks/useColors';
import { RootStackParamList } from '../navigation/NavigationRoot';

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export type ProfileScreenNavigation = ProfileScreenProps['navigation'];

const Profile = ({ navigation, route }: ProfileScreenProps) => {
  const { colors } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BackButton navigation={navigation} />
      <ProfileTitles />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
