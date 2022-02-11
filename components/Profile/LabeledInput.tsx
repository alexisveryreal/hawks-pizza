import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useColors } from "../../hooks/useColors";

type LabeledInputProps = {
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
};

const LabeledInput = ({ label, placeholder, onChange }: LabeledInputProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.label, { color: colors.textDark }]}>{label}</Text>
      <View style={[styles.inputLine, { borderBottomColor: colors.textLight }]}>
        <TextInput
          style={[styles.input, { color: colors.textDark }]}
          placeholder={placeholder}
          placeholderTextColor={colors.textDark}
          onChangeText={(text) => onChange(text)}
          value={placeholder}
          clearTextOnFocus
        />
      </View>
    </View>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
  },
  inputLine: {
    width: "66%",
    marginLeft: 10,
    borderBottomWidth: 2,
  },
  input: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginLeft: 5,
  },
});
