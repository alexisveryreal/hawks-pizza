import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../hooks/useColors';

const NotificationTitle = () => {
  const { colors } = useColors();
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.title, { color: colors.textDark }]}>
        Notifications
      </Text>
    </View>
  );
};

export default NotificationTitle;

const styles = StyleSheet.create({
  titleWrapper: { paddingHorizontal: 20, paddingTop: 30, paddingBottom: 20 },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
  },
});
