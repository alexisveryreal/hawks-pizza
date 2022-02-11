import { StyleSheet, View } from "react-native";
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationRoot";
import BackButton from "../components/BackButton";
import {
  SettingsTitle,
  SettingProfile,
  SettingAppTitle,
  SettingRow,
} from "../components";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../atoms/darkModeAtom";
import { useColors } from "../hooks/useColors";

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

export type SettingsScreenNavigation = SettingsScreenProps["navigation"];

const Settings = ({ navigation }: SettingsScreenProps) => {
  const colorScheme = useRecoilValue(darkModeState);
  const isDarkModeOn = colorScheme === "dark" ? "On" : "Off";
  const { colors } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
        screenName="Language"
      />
      <SettingRow
        mainLabel="Notifications"
        iconName="notifications-sharp"
        isSwitch={false}
        navigation={navigation}
        screenName="Notifications"
      />
      <SettingRow
        mainLabel="Dark Mode"
        iconName="moon-sharp"
        isSwitch={true}
        subLabel={isDarkModeOn}
      />
      <SettingRow
        mainLabel="Help"
        iconName="help-circle"
        isSwitch={false}
        navigation={navigation}
        screenName="Help"
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
