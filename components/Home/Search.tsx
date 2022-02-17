import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

import popularData, { PopularData } from "../../assets/data/popularData";
import { PopularTypes } from "../../atoms/popularAtom";
import popularSodaData from "../../assets/data/popularSodaData";

type SearchProps = {
  originalPopular: PopularTypes;
  setFilteredData: React.Dispatch<React.SetStateAction<PopularTypes>>;
};

const Search = ({ originalPopular, setFilteredData }: SearchProps) => {
  const [filter, setFilter] = useState("");

  const filterChangeHandler = (text: string) => {
    if (text === "") {
      console.log("Setting original data");
      if (originalPopular.kind === "Pizza") {
        setFilteredData({ kind: "Pizza", data: popularData });
      } else {
        setFilteredData({ kind: "Soda", data: popularSodaData });
      }
      setFilter("");
    } else {
      switch (originalPopular.kind) {
        case "Pizza":
          const tempFilter = originalPopular.data.filter((value) =>
            value.title.includes(text)
          );
          setFilteredData({ kind: "Pizza", data: tempFilter });
          setFilter(text);
          break;
        case "Soda":
          const tempSodaFilter = originalPopular.data.filter((value) =>
            value.title.includes(text)
          );
          setFilteredData({ kind: "Soda", data: tempSodaFilter });
          setFilter(text);
          break;
      }
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
