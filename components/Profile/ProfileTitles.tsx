import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors/colors";
import LabeledInput from "./LabeledInput";

import { useRecoilValue, useRecoilState } from "recoil";
import { usernameState } from "../../atoms/usernameAtom";
import { emailState } from "../../atoms/emailAtom";
import GenderSelection from "./GenderSelection";

const ProfileTitles = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [email, setEmail] = useRecoilState(emailState);

  const [tempUser, setTempUser] = useState(username);
  const [tempEmail, setTempEmail] = useState(email);

  const handleChangeUsername = (text: string) => {
    console.log(text);
    setTempUser(text);
  };

  const handleChangeEmail = (text: string) => {
    console.log(text);
    setTempEmail(text);
  };

  const handleSubmitChanges = () => {
    // check for empty
    if (tempUser === "") {
      alert("Error: username field is empty!");
    } else if (tempEmail === "") {
      alert("Error: email field is empty!");
    } else {
      setUsername(tempUser);
      setEmail(tempEmail);
      console.log("set user to: ", tempUser);
      console.log("Set email to ", tempEmail);
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
        placeholder={tempUser}
        onChange={handleChangeUsername}
      />
      <GenderSelection />
      <LabeledInput
        label="Email"
        placeholder={tempEmail}
        onChange={handleChangeEmail}
      />
      <TouchableOpacity onPress={() => handleSubmitChanges()}>
        <View style={styles.saveWrapper}>
          <Text style={styles.saveText}>Save</Text>
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
  saveWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
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
