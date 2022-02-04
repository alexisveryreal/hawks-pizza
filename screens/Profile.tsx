import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { ProfileHeader } from "../components";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
