import { StyleSheet, View } from "react-native";
import React from "react";
import { ProfileTitles } from "../components";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationRoot";
import { useColors } from "../hooks/useColors";
import BackButton from "../components/BackButton";

export type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export type ProfileScreenNavigation = ProfileScreenProps["navigation"];

const Profile = ({ navigation, route }: ProfileScreenProps) => {
  const { colors } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <BackButton navigation={navigation} />
      <ProfileTitles />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
