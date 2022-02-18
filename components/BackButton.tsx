import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useColors } from '../hooks/useColors';
import { LanguageNavigation } from '../screens/Language';
import { NotificationNavigation } from '../screens/Notifications';
import { ProfileScreenNavigation } from '../screens/Profile';
import { SettingsScreenNavigation } from '../screens/Settings';
import { HelpNavigation } from '../types/Help/HelpTypes';

type BackButtonProps = {
  navigation:
    | SettingsScreenNavigation
    | LanguageNavigation
    | NotificationNavigation
    | HelpNavigation
    | ProfileScreenNavigation;
};

const BackButton = ({ navigation }: BackButtonProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.backButtonWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={[styles.backButton, { borderColor: colors.textLight }]}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButtonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  backButton: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});
