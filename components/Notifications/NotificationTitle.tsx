import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

const NotificationTitle = () => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Notifications</Text>
    </View>
  );
};

export default NotificationTitle;

const styles = StyleSheet.create({
  titleWrapper: { paddingHorizontal: 20, paddingTop: 30, paddingBottom: 20 },
  title: {
    fontSize: 32,
    fontFamily: "Montserrat_700Bold",
    color: colors.textDark,
  },
});
