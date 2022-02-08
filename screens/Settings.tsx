import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import BackButton from "../components/BackButton";
import {
  SettingsTitle,
  SettingProfile,
  SettingAppTitle,
  SettingRow,
} from "../components";

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
      <SettingAppTitle />
      <SettingRow
        mainLabel="Language"
        iconName="earth-sharp"
        isSwitch={false}
        subLabel="English"
        navigation={navigation}
      />
      <SettingRow
        mainLabel="Notifications"
        iconName="notifications-sharp"
        isSwitch={false}
        navigation={navigation}
      />
      <SettingRow
        mainLabel="Dark Mode"
        iconName="moon-sharp"
        isSwitch={true}
        subLabel="Off"
      />
      <SettingRow
        mainLabel="Help"
        iconName="help-circle"
        isSwitch={false}
        navigation={navigation}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
