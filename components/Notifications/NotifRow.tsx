import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors/colors';
import { useColors } from '../../hooks/useColors';

type NotifRowProps = {
  label: string;
  description?: string;
};

// Todo: Create an object for recoil for each notification which has a boolean
// * {unread: false, push: false, sms: false, email: false}

const NotifRow = ({ label, description }: NotifRowProps) => {
  const [checked, setChecked] = useState(true);
  const { colors } = useColors();

  return (
    <View style={styles.rowWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.rowLabel, { color: colors.textDark }]}>
          {label}
        </Text>
        {description && (
          <Text style={[styles.rowDesc, { color: colors.textDark }]}>
            {description}
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={() => setChecked((prev) => !prev)}>
        {checked ? (
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={25}
            color={colors.primary}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={25}
            color={colors.primary}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default NotifRow;

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
  rowDesc: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
  },
});
