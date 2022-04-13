import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, ScrollView } from 'native-base';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <BackButton navigation={navigation} />
          <ProfileTitles />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
