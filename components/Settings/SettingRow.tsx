import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import ForwardButton from "./ForwardButton";
import { SettingsScreenNavigation } from "../../screens/Settings";

type SettingRowProps = {
  iconName:
    | "moon-sharp"
    | "notifications-sharp"
    | "earth-sharp"
    | "help-circle";
  mainLabel: string;
  subLabel?: string;
  isSwitch: boolean;
  navigation?: SettingsScreenNavigation;
  screenName?: "Language" | "Notifications" | "Profile" | "Help";
};

const SettingRow = ({
  iconName,
  mainLabel,
  subLabel,
  isSwitch,
  navigation,
  screenName,
}: SettingRowProps) => {
  return (
    <View style={styles.rowWrapper}>
      <View style={styles.iconWrapper}>
        <Ionicons
          name={iconName}
          size={20}
          color={colors.black}
          style={styles.icon}
        />
      </View>
      <Text style={styles.mainLabel}>{mainLabel}</Text>
      {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
      {!isSwitch && navigation && screenName ? (
        <ForwardButton navigation={navigation} screenName={screenName} />
      ) : (
        <View style={styles.switchWrapper}>
          <Switch />
        </View>
      )}
    </View>
  );
};

export default SettingRow;

const styles = StyleSheet.create({
  rowWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    // borderWidth: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  icon: {
    alignSelf: "center",
  },
  mainLabel: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.textDark,
  },
  subLabel: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
    paddingLeft: 30,
  },
  switchWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
