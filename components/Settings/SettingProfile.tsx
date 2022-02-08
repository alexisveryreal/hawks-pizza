import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { Feather } from "@expo/vector-icons";

import { SettingsScreenNavigation } from "../../screens/Settings";
import ForwardButton from "./ForwardButton";

type SettingsProfileProps = {
  navigation: SettingsScreenNavigation;
};

const SettingProfile = ({ navigation }: SettingsProfileProps) => {
  return (
    <View style={styles.profileSectionWrapper}>
      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.profileInfoWrapper}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileUserWrapper}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.personalInfo}>Personal Info</Text>
        </View>
        <ForwardButton navigation={navigation} />
      </View>
    </View>
  );
};

export default SettingProfile;

const styles = StyleSheet.create({
  profileSectionWrapper: {
    paddingHorizontal: 20,
  },
  profileText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
  },
  profileInfoWrapper: {
    flexDirection: "row",
    // borderWidth: 1,
    paddingTop: 15,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileUserWrapper: {
    paddingLeft: 15,
  },
  username: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.textDark,
  },
  personalInfo: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
  },
});
