import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.profileImg}
      />
      <Feather name="menu" size={24} color={colors.textDark} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
