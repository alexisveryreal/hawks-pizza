import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import {
  ProfileHeader,
  ProfileTitles,
  Redeem,
  RewardTitles,
} from "../components";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export type ProfileScreenNavigation = ProfileScreenProps["navigation"];

const Profile = ({ navigation, route }: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <ProfileHeader navigation={navigation} />
      <ProfileTitles />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
