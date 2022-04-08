import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const LanguageSearch = () => {
  const { colors } = useColors();
  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={[styles.search, { borderBottomColor: colors.textLight }]}>
        <TextInput
          style={[styles.searchText, { color: colors.textLight }]}
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
