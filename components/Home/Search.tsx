/* eslint-disable no-case-declarations */
import { Feather } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import popularData from '../../assets/data/popularData';
import popularSodaData from '../../assets/data/popularSodaData';
import { PopularTypes } from '../../atoms/popularAtom';
import { useColors } from '../../hooks/useColors';

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
      if (originalPopular.kind === 'Pizza') {
        setFilteredData({ kind: 'Pizza', data: popularData });
      } else {
        setFilteredData({ kind: 'Soda', data: popularSodaData });
      }
      setNotFound(false);
      setFilter('');
      searchLength.current = 0;
    } else {
      switch (originalPopular.kind) {
        case 'Pizza':
          if (text.length <= searchLength.current) {
            const temp = popularData.filter((value) =>
              value.title.toLowerCase().includes(text.toLocaleLowerCase()),
            );
            setFilteredData({ kind: 'Pizza', data: temp });
            setNotFound(false);
          } else {
            const tempFilter = originalPopular.data.filter((value) =>
              value.title.toLowerCase().includes(text.toLowerCase()),
            );
            if (tempFilter.length !== 0) {
              setFilteredData({ kind: 'Pizza', data: tempFilter });
              setNotFound(false);
            } else {
              setNotFound(true);
            }
          }
          setFilter(text);
          searchLength.current = text.length;
          break;
        case 'Soda':
          if (text.length <= searchLength.current) {
            const temp = popularSodaData.filter((value) =>
              value.title.toLowerCase().includes(text.toLowerCase()),
            );
            setFilteredData({ kind: 'Soda', data: temp });
            setNotFound(false);
          } else {
            const tempSodaFilter = originalPopular.data.filter((value) =>
              value.title.toLowerCase().includes(text.toLowerCase()),
            );
            if (tempSodaFilter.length !== 0) {
              setFilteredData({ kind: 'Soda', data: tempSodaFilter });
              setNotFound(false);
            } else {
              setNotFound(true);
            }
          }

          setFilter(text);
          searchLength.current = text.length;
          break;
      }
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
