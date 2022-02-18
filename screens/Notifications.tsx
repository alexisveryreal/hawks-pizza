import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';

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
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <NotificationTitle />
      <NotificationRows />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
