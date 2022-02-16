import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GenderCircle from "./GenderCircle";
import { useColors } from "../../hooks/useColors";
import { Genders } from "../../types/profileTypes";

type GenderSelectionProps = {
  gender: Genders;
  onPress: (name: Genders) => void;
};

const GenderSelection = ({ onPress, gender }: GenderSelectionProps) => {
  const { colors } = useColors();

  // console.log("CURRENT GENDER!", gender);

  const AllGenders: Genders[] = [
    "gender-female",
    "gender-male",
    "gender-non-binary",
    "gender-transgender",
  ];

  const handleSelected = (name: Genders) => {
    return name === gender;
  };

  return (
    <View style={styles.genderWrapper}>
      <Text style={[styles.genderText, { color: colors.textDark }]}>
        Gender
      </Text>
      {AllGenders.map((gender, index) => (
        <GenderCircle
          key={gender + index}
          name={gender}
          selected={handleSelected(gender)}
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
