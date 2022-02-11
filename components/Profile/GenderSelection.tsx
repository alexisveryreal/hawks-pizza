import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import GenderCircle from "./GenderCircle";
import { GenderSelected } from "../../atoms/genderAtom";
import { useColors } from "../../hooks/useColors";

type GenderSelectionProps = {
  genders: GenderSelected[];
  onPress: (name: string) => void;
};

const GenderSelection = ({ genders, onPress }: GenderSelectionProps) => {
  const { colors } = useColors();

  return (
    <View style={styles.genderWrapper}>
      <Text style={[styles.genderText, { color: colors.textDark }]}>
        Gender
      </Text>
      {genders.map((gender) => (
        <GenderCircle
          key={gender.id}
          name={gender.name}
          selected={gender.selected}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

export default GenderSelection;

const styles = StyleSheet.create({
  genderWrapper: {
    paddingHorizontal: 20,
    marginVertical: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  genderText: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
  },
});
