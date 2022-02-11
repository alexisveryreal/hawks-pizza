import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SettingsScreenNavigation } from "../screens/Settings";
import { LanguageNavigation } from "../screens/Language";
import { EditScreenNavigation } from "../screens/ProfileEdit";
import { NotificationNavigation } from "../screens/Notifications";
import { HelpNavigation } from "../types/Help/HelpTypes";
import { useColors } from "../hooks/useColors";

type BackButtonProps = {
  navigation:
    | SettingsScreenNavigation
    | LanguageNavigation
    | NotificationNavigation
    | HelpNavigation
    | EditScreenNavigation;
};

const BackButton = ({ navigation }: BackButtonProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.backButtonWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.backButton, { borderColor: colors.textLight }]}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  backButton: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
