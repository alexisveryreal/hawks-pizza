import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { SettingsScreenNavigation } from "../screens/Settings";
import { LanguageNavigation } from "../screens/Language";
import { EditScreenNavigation } from "../screens/ProfileEdit";

type BackButtonProps = {
  navigation:
    | SettingsScreenNavigation
    | LanguageNavigation
    | EditScreenNavigation;
};

const BackButton = ({ navigation }: BackButtonProps) => {
  return (
    <View style={styles.backButtonWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
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
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
