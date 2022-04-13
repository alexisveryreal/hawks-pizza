/* eslint-disable no-case-declarations */
import { Feather } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import popularData from '../../assets/data/popularData';
import popularSeaData from '../../assets/data/popularSeaData';
import popularSodaData from '../../assets/data/popularSodaData';
import { PopularTypes } from '../../atoms/popularAtom';
import { useColors } from '../../hooks/useColors';
import { resetSearchData } from '../../utils/searchUtils';

type SearchProps = {
  originalPopular: PopularTypes;
  setFilteredData: React.Dispatch<React.SetStateAction<PopularTypes>>;
  setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({
  originalPopular,
  setFilteredData,
  setNotFound,
}: SearchProps) => {
  const [filter, setFilter] = useState('');
  const { colors } = useColors();
  const searchLength = useRef(0);

  const filterChangeHandler = (text: string) => {
    console.log(text);
    if (text === '') {
      console.log('Setting original data');

      switch (originalPopular.kind) {
        case 'Pizza':
          setFilteredData({ kind: 'Pizza', data: popularData });
          break;
        case 'Seafood':
          setFilteredData({ kind: 'Seafood', data: popularSeaData });
          break;
        case 'Soda':
          setFilteredData({ kind: 'Soda', data: popularSodaData });
          break;
      }

      setNotFound(false);
      setFilter('');
      searchLength.current = 0;
    } else {
      resetSearchData(
        originalPopular,
        text,
        searchLength.current,
        setFilteredData,
        setNotFound,
      );
      setFilter(text);
      searchLength.current = text.length;
    }
  };

  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={[styles.search, { borderBottomColor: colors.textLight }]}>
        <TextInput
          style={[styles.searchText, { color: colors.textLight }]}
          placeholder="Search"
          placeholderTextColor={colors.textLight}
          value={filter}
          onChangeText={(text) => filterChangeHandler(text)}
          autoCapitalize="words"
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
    marginBottom: 5,
  },
});
