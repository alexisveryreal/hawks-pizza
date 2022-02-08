import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors/colors";
import LabeledInput from "./LabeledInput";

import { useRecoilValue } from "recoil";
import { usernameState } from "../../atoms/usernameAtom";

const ProfileTitles = () => {
  const username = useRecoilValue(usernameState);
  const [tempUser, setTempUser] = useState("");

  const handleChangeUsername = (text: string) => {
    console.log(text);
    setTempUser(text);
  };

  const handleSubmitChanges = () => {
    // check if temp values are different than before
    if (tempUser !== username) {
      // set here
    }
  };

  return (
    <View>
      <Text style={styles.profileText}>Profile</Text>
      <View style={styles.photoWrapper}>
        <Text style={styles.photoText}>Photo</Text>
        <View style={styles.titleWrapper}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.uploadText}>Upload Image</Text>
        </View>
      </View>
      <LabeledInput
        label="Username"
        placeholder={username}
        onChange={handleChangeUsername}
      />
    </View>
  );
};

export default ProfileTitles;

const styles = StyleSheet.create({
  profileText: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
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
    color: colors.textLight,
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
    color: colors.secondary,
  },
  memberTime: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
    paddingTop: 5,
  },
});
