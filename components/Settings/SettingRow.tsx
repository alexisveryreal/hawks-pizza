import { Ionicons } from '@expo/vector-icons';
import { Switch } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { darkModeState } from '../../atoms/darkModeAtom';
import { useColors } from '../../hooks/useColors';
import { SettingsScreenNavigation } from '../../screens/Settings';
import ForwardButton from './ForwardButton';

type SettingRowProps = {
  iconName:
    | 'moon-sharp'
    | 'notifications-sharp'
    | 'earth-sharp'
    | 'help-circle';
  mainLabel: string;
  subLabel?: string;
  isSwitch: boolean;
  navigation?: SettingsScreenNavigation;
  screenName?: 'Language' | 'Notifications' | 'Profile' | 'Help';
};

const SettingRow = ({
  iconName,
  mainLabel,
  subLabel,
  isSwitch,
  navigation,
  screenName,
}: SettingRowProps) => {
  const [colorScheme, setColorScheme] = useRecoilState(darkModeState);
  const { colors } = useColors();

  const handleToggle = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  };

  return (
    <View style={styles.rowWrapper}>
      <View style={[styles.iconWrapper, { backgroundColor: colors.white }]}>
        <Ionicons
          name={iconName}
          size={20}
          color={colors.textDark}
          style={styles.icon}
        />
      </View>
      <Text style={[styles.mainLabel, { color: colors.textDark }]}>
        {mainLabel}
      </Text>
      {subLabel && (
        <Text style={[styles.subLabel, { color: colors.textLight }]}>
          {subLabel}
        </Text>
      )}
      {!isSwitch && navigation && screenName ? (
        <ForwardButton navigation={navigation} screenName={screenName} />
      ) : (
        <View style={styles.switchWrapper}>
          <Switch
            colorScheme="yellow"
            onToggle={() => handleToggle()}
            isChecked={colorScheme === 'dark'}
          />
        </View>
      )}
    </View>
  );
};

export default SettingRow;

const styles = StyleSheet.create({
  rowWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    // borderWidth: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  icon: {
    alignSelf: 'center',
  },
  mainLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    paddingLeft: 30,
  },
  switchWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
