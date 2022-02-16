import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColors } from "../../hooks/useColors";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../atoms/darkModeAtom";
import { Genders } from "../../types/profileTypes";

type GenderCircleProps = {
  name: Genders;
  selected: boolean;
  onPress: (name: Genders) => void;
};

const GenderCircle = ({ name, selected, onPress }: GenderCircleProps) => {
  const { colors } = useColors();
  const colorScheme = useRecoilValue(darkModeState);

  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View
        style={[
          styles.circle,
          {
            borderColor: colorScheme === "light" ? colors.textLight : undefined,
            backgroundColor: selected ? colors.primary : colors.white,
            borderWidth: selected && colorScheme === "light" ? 0 : 1,
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
    padding: 10,
  },
});
