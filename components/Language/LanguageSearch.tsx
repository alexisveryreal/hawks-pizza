import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { Feather } from "@expo/vector-icons";

type LanguageSearchProps = {};

const LanguageSearch = () => {
  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
        <TextInput
          style={styles.searchText}
          placeholder="Search"
          placeholderTextColor={colors.textLight}
          // value={filter}
          // onChangeText={(text) => filterChangeHandler(text)}
          autoCapitalize="words"
        />
      </View>
    </View>
  );
};

export default LanguageSearch;

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
});
