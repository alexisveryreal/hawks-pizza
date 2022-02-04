import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { Feather } from "@expo/vector-icons";

import { ProfileScreenNavigation } from "../../screens/Profile";

type ProfileHeaderProps = {
  navigation: ProfileScreenNavigation;
};

const ProfileHeader = ({ navigation }: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeaderWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.profileHeaderLeft}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileEdit")}>
        <View style={styles.profileHeaderRight}>
          <Text style={styles.headerRightText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profileHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeaderLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  profileHeaderRight: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  headerRightText: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textDark,
  },
});
