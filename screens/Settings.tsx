import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import BackButton from "../components/BackButton";
import { SettingsTitle, SettingProfile } from "../components";

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

export type SettingsScreenNavigation = SettingsScreenProps["navigation"];

const Settings = ({ navigation }: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <SettingsTitle />
      <SettingProfile navigation={navigation} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
