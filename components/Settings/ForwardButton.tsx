import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { Feather } from "@expo/vector-icons";
import { SettingsScreenNavigation } from "../../screens/Settings";

type ForwardButtonProps = {
  navigation: SettingsScreenNavigation;
  screenName: "Language" | "Notifications" | "Profile" | "Help";
};

const ForwardButton = ({ navigation, screenName }: ForwardButtonProps) => {
  return (
    <View style={styles.forwardButtonWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <View style={styles.forwardButton}>
          <Feather name="chevron-right" size={20} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForwardButton;

const styles = StyleSheet.create({
  forwardButtonWrapper: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
  },
  forwardButton: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
