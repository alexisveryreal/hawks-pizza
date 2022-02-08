import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

type GenderCircleProps = {
  name:
    | "gender-female"
    | "gender-male"
    | "gender-non-binary"
    | "gender-transgender";
  selected: boolean;
  onPress: (name: string) => void;
};

const GenderCircle = ({ name, selected, onPress }: GenderCircleProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: selected ? colors.primary : "white",
            borderWidth: selected ? 0 : 1,
          },
        ]}
      >
        <MaterialCommunityIcons name={name} size={20} color={colors.textDark} />
      </View>
    </TouchableOpacity>
  );
};

export default GenderCircle;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  circle: {
    borderRadius: 40,
    borderColor: colors.textLight,
    borderWidth: 1,
    padding: 10,
  },
});
