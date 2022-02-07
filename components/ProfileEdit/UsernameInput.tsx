import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import colors from "../../assets/colors/colors";
import { useRecoilState } from "recoil";
import { usernameState } from "../../atoms/usernameAtom";

const UsernameInput = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [tempUser, setTempUser] = useState(username);

  const handleChangeText = (text: string) => {
    if (text === "") {
      setTempUser("");
    } else {
      setTempUser(text);
    }
  };

  const handleSubmit = () => {
    if (tempUser !== "") {
      Keyboard.dismiss();
      console.log("Setting Username: ...", tempUser);
      setUsername(tempUser);
    } else {
      alert("Please provide a non-empty username!");
    }
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.usernameWrapper}>
        <View style={styles.userLine}>
          <TextInput
            placeholder={tempUser}
            style={styles.userInput}
            placeholderTextColor={colors.textLight}
            value={tempUser}
            autoCapitalize="none"
            onChangeText={(text) => handleChangeText(text)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => handleSubmit()}>
        <View style={styles.saveWrapper}>
          <Text style={styles.saveText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UsernameInput;

const styles = StyleSheet.create({
  pageWrapper: {
    flexDirection: "column",
  },
  usernameWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  userLine: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  userInput: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
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
