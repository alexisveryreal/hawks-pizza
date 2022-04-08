import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../hooks/useColors';
import { LANGUAGE_CODES } from '../../translations/i18n';

const LanguageSelect = () => {
  const { i18n, t } = useTranslation();
  const { colors } = useColors();

  const handleText = (language: string) => {
    let text = '';
    switch (language) {
      case 'en':
        text = `${t('common:english')} - English`;
        break;
      case 'es':
        text = `${t('common:spanish')} - español`;
        break;
      case 'fr':
        text = `${t('common:french')} - français`;
        break;
      default:
        text = `${t('common:english')} - English`;
        break;
    }
    return text;
  };

  return (
    <View style={styles.selectWrapper}>
      {LANGUAGE_CODES.map((lang) => (
        <View style={styles.languageRow} key={lang}>
          <Text style={[styles.languageText, { color: colors.textDark }]}>
            {handleText(lang)}
          </Text>
          <TouchableOpacity onPress={() => i18n.changeLanguage(lang)}>
            {lang === i18n.language ? (
              <MaterialCommunityIcons
                name="radiobox-marked"
                size={25}
                color={colors.primary}
              />
            ) : (
              <MaterialCommunityIcons
                name="radiobox-blank"
                size={25}
                color={colors.black}
              />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default LanguageSelect;

const styles = StyleSheet.create({
  selectWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  languageText: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
