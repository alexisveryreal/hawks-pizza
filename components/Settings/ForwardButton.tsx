import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SettingsScreenNavigation } from "../../screens/Settings";
import { useColors } from "../../hooks/useColors";

type ForwardButtonProps = {
  navigation: SettingsScreenNavigation;
  screenName: "Language" | "Notifications" | "Profile" | "Help";
};

const ForwardButton = ({ navigation, screenName }: ForwardButtonProps) => {
  const { colors } = useColors();

  return (
    <View style={styles.forwardButtonWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <View style={[styles.forwardButton, { borderColor: colors.textLight }]}>
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
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
