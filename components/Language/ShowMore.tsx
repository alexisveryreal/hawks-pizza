import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors/colors';

const ShowMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.showWrapper}>
      <TouchableOpacity onPress={() => setShowMore((prev) => !prev)}>
        <Text style={styles.showText}>
          {showMore ? 'Show Less' : 'Show More'}
        </Text>
      </TouchableOpacity>
      {showMore && (
        <Text style={styles.moreLang}>More Languages coming soon!</Text>
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
    color: colors.textLight,
  },
  moreLang: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    color: colors.textDark,
    paddingTop: 10,
  },
});
