import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import GenderCircle from "./GenderCircle";
import { useRecoilState } from "recoil";
import { genderState, GenderSelected } from "../../atoms/genderAtom";

const GenderSelection = () => {
  const [allGenders, setAllGenders] = useRecoilState(genderState);

  const setSelected = (name: string) => {
    let temp: GenderSelected[] = [];
    allGenders.forEach((gender) => {
      if (gender.name === name || gender.selected === true) {
        let theGender = { ...gender };
        theGender.selected = !theGender.selected;
        temp.push(theGender);
      } else {
        temp.push(gender);
      }
    });
    return temp;
  };

  const handleSelectGender = (name: string) => {
    const temp = setSelected(name);
    console.log("Selected: ", name);
    setAllGenders(temp);
  };

  return (
    <View style={styles.genderWrapper}>
      <Text style={styles.genderText}>Gender</Text>
      {allGenders.map((gender) => (
        <GenderCircle
          key={gender.id}
          name={gender.name}
          selected={gender.selected}
          onPress={handleSelectGender}
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
    color: colors.textLight,
  },
  genderIconWrapper: {
    borderRadius: 40,
    borderColor: colors.textLight,
    borderWidth: 1,
    padding: 10,
  },
  genderIconCircle: {},
  genderIcon: {},
});
