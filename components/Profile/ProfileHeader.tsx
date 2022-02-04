import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileHeader = () => {
  return (
    <View style={styles.profileHeaderWrapper}>
      <Text>Hello</Text>
      <Text>Hello</Text>
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
});
