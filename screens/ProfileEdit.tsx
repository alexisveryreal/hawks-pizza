import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import BackButton from "../components/BackButton";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/NavigationRoot";
import UsernameInput from "../components/ProfileEdit/UsernameInput";

type ProfileEditScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ProfileEdit"
>;

export type EditScreenNavigation = ProfileEditScreenProps["navigation"];

const ProfileEdit = ({ navigation, route }: ProfileEditScreenProps) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <UsernameInput />
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});
