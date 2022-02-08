import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

type LabeledInputProps = {
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
};

const LabeledInput = ({ label, placeholder, onChange }: LabeledInputProps) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputLine}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.textDark}
          onChangeText={(text) => onChange(text)}
          // value={}
        />
      </View>
    </View>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
  },
  inputLine: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  input: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textDark,
    marginLeft: 5,
  },
});
