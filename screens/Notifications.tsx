import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationRoot";
import BackButton from "../components/BackButton";
import { NotificationRows, NotificationTitle } from "../components";

type NotificationsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notifications"
>;
export type NotificationNavigation = NotificationsScreenProps["navigation"];

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
