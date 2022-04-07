import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../assets/colors/colors';
import { NotificationRows, NotificationTitle } from '../components';
import BackButton from '../components/BackButton';
import { RootStackParamList } from '../navigation/NavigationRoot';

type NotificationsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Notifications'
>;
export type NotificationNavigation = NotificationsScreenProps['navigation'];

const Notifications = ({ navigation, route }: NotificationsScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <NotificationTitle />
      <NotificationRows />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
