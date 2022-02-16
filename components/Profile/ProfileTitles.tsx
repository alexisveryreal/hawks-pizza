import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LabeledInput from "./LabeledInput";

import { useRecoilState, useRecoilValue } from "recoil";
import GenderSelection from "./GenderSelection";
import { useColors } from "../../hooks/useColors";
import profileState from "../../atoms/profileAtom";

import arrayUtils from "../../utils/arrayUtils";
import { Genders, Profile } from "../../types/profileTypes";
import useUpdateProfile from "../../hooks/useUpdateProfile";

const ProfileTitles = () => {
  const profile = useRecoilValue(profileState);
  const [tempProfile, setTempProfile] = useState(profile);

  const index = 0;
  const currentProfile = tempProfile[index];

  const { colors } = useColors();

  const { isLoading, updateProfile } = useUpdateProfile();

  const handleChangeUsername = (text: string) => {
    const temp = arrayUtils.replaceItemAtIndex<Profile>(tempProfile, index, {
      ...currentProfile,
      username: text,
    });
    setTempProfile(temp);
  };

  const handleChangeEmail = (text: string) => {
    const temp = arrayUtils.replaceItemAtIndex<Profile>(tempProfile, index, {
      ...currentProfile,
      email: text,
    });
    setTempProfile(temp);
  };

  const handleToggleGender = (name: Genders) => {
    const temp = arrayUtils.replaceItemAtIndex<Profile>(tempProfile, index, {
      ...currentProfile,
      gender: name,
    });
    setTempProfile(temp);
  };

  const handleSubmitChanges = () => {
    console.log("Updating current profile changes: ", currentProfile);
    updateProfile({ ...currentProfile });
  };

  return (
    <View>
      <Text style={[styles.profileText, { color: colors.textDark }]}>
        Profile
      </Text>
      <View style={styles.photoWrapper}>
        <Text style={[styles.photoText, { color: colors.textDark }]}>
          Photo
        </Text>
        <View style={styles.titleWrapper}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Text style={[styles.uploadText, { color: colors.secondary }]}>
            Upload Image
          </Text>
        </View>
      </View>
      <LabeledInput
        label="Username"
        placeholder={currentProfile.username}
        onChange={handleChangeUsername}
      />
      <GenderSelection
        gender={currentProfile.gender}
        onPress={handleToggleGender}
      />
      <LabeledInput
        label="Email"
        placeholder={currentProfile.email}
        onChange={handleChangeEmail}
      />
      <TouchableOpacity onPress={() => handleSubmitChanges()}>
        <View style={[styles.saveWrapper, { backgroundColor: colors.primary }]}>
          <Text style={[styles.saveText, { color: colors.textDark }]}>
            Save
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileTitles;

const styles = StyleSheet.create({
  profileText: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontFamily: "Montserrat_700Bold",
    paddingTop: 30,
  },
  photoWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 1,
  },
  photoText: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    // borderWidth: 1,
  },
  titleFormat: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    // borderWidth: 1,
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  uploadText: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    paddingTop: 25,
  },
  saveWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
  },
});
