import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../assets/colors/colors';
import { NotificationRows, NotificationTitle } from '../components';
import BackButton from '../components/BackButton';
import { useColors } from '../hooks/useColors';
import { RootStackParamList } from '../navigation/NavigationRoot';

type NotificationsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Notifications'
>;
export type NotificationNavigation = NotificationsScreenProps['navigation'];

const Notifications = ({ navigation, route }: NotificationsScreenProps) => {
  const { colors } = useColors();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <BackButton navigation={navigation} />
      <NotificationTitle />
      <NotificationRows />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
