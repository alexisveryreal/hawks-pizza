import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const ShowMore = () => {
  const [showMore, setShowMore] = useState(false);
  const { colors } = useColors();

  return (
    <View style={styles.showWrapper}>
      <TouchableOpacity onPress={() => setShowMore((prev) => !prev)}>
        <Text style={[styles.showText, { color: colors.textLight }]}>
          {showMore ? 'Show Less' : 'Show More'}
        </Text>
      </TouchableOpacity>
      {showMore && (
        <Text style={[styles.moreLang, { color: colors.textDark }]}>
          More Languages coming soon!
        </Text>
      )}
    </View>
  );
};

export default ShowMore;

const styles = StyleSheet.create({
  showWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  showText: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    textDecorationLine: 'underline',
  },
  moreLang: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    paddingTop: 10,
  },
});
