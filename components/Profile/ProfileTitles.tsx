import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const ProfileTitles = () => {
  return (
    <View style={styles.titleWrapper}>
      <Image
        source={require("../../assets/images/profile.png")}
        style={styles.profileImage}
      />
      <Text style={styles.username}>Username</Text>
      <Text style={styles.memberTime}>Member for 2 years</Text>
    </View>
  );
};

export default ProfileTitles;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    paddingTop: 12,
    color: colors.textDark,
  },
  memberTime: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
    paddingTop: 5,
  },
});
