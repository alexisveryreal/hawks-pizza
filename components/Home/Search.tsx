import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

import { PopularData } from "../../assets/data/popularData";

type SearchProps = {
  originalPopular: PopularData[];
  setFilteredData: React.Dispatch<React.SetStateAction<PopularData[]>>;
};

const Search = ({ originalPopular, setFilteredData }: SearchProps) => {
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (text: string) => {
    if (text === "") {
      console.log("Setting original data");
      setFilteredData(originalPopular);
      setFilter("");
    } else {
      const tempFilter = originalPopular.filter((value) =>
        value.title.includes(text)
      );
      setFilteredData(tempFilter);
      setFilter(text);
    }
  };

  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.search}>
        <TextInput
          style={styles.searchText}
          placeholder="Search"
          placeholderTextColor={colors.textLight}
          value={filter}
          onChangeText={(text) => filterChangeHandler(text)}
          autoCapitalize="words"
        />
        {/* <Text style={styles.searchText}>Search</Text> */}
      </View>
    </View>
  );
};

export default Search;

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