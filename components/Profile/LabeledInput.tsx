import { FormControl, Input, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEDIUM } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';

type LabeledInputProps = {
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  isInvalid: boolean;
};

const LabeledInput = ({
  label,
  placeholder,
  onChange,
  isInvalid,
}: LabeledInputProps) => {
  const { colors } = useColors();
  return (
    <View style={styles.inputWrapper}>
      <Text style={[styles.label, { color: colors.textDark }]}>{label}</Text>
      <View style={[styles.inputLine]}>
        <FormControl isInvalid={isInvalid}>
          <Input
            placeholder={placeholder}
            variant="underlined"
            fontFamily={MEDIUM}
            fontSize="sm"
            color={colors.textDark}
            value={placeholder}
            onChangeText={(text) => onChange(text)}
            clearTextOnFocus
            borderBottomColor={colors.textLight}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Something is wrong.
          </FormControl.ErrorMessage>
        </FormControl>
      </View>
    </View>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  inputLine: {
    width: '66%',
    marginLeft: 10,
    // borderBottomWidth: 2,
  },
});
