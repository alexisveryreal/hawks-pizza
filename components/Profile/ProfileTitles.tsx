import { Button, Center } from 'native-base';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import profileState from '../../atoms/profileAtom';
import { BOLD } from '../../constants/strings';
import { useColors } from '../../hooks/useColors';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import { Genders } from '../../types/profileTypes';
import GenderSelection from './GenderSelection';
import LabeledInput from './LabeledInput';

const ProfileTitles = () => {
  const profile = useRecoilValue(profileState);
  const [tempProfile, setTempProfile] = useState(profile);
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // console.log("Current profile: ", tempProfile);

  const { colors } = useColors();

  const { updateProfile, isLoading } = useUpdateProfile();

  const handleChangeUsername = (text: string) => {
    if (text === '') {
      setUserError(true);
    } else {
      setUserError(false);
    }

    setTempProfile({ ...tempProfile, username: text });
  };

  const handleChangeEmail = (text: string) => {
    if (text === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    setTempProfile({ ...tempProfile, email: text });
  };

  const handleToggleGender = (name: Genders) => {
    setTempProfile({ ...tempProfile, gender: name });
  };

  const handleSubmitChanges = () => {
    console.log('Updating current profile changes: ', tempProfile);
    updateProfile({ ...tempProfile });
  };

  return (
    <View>
      <Text style={[styles.profileText, { color: colors.textDark }]}>
        Profile
      </Text>
      <View style={styles.photoWrapper}>
        <Text style={[styles.photoText, { color: colors.textDark }]}>
          Photo
        </Text>
        <View style={styles.titleWrapper}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={[styles.uploadText, { color: colors.secondary }]}>
            Upload Image
          </Text>
        </View>
      </View>
      <LabeledInput
        label="Username"
        placeholder={tempProfile.username}
        onChange={handleChangeUsername}
        isInvalid={userError}
      />
      <GenderSelection
        gender={tempProfile.gender}
        onPress={handleToggleGender}
      />
      <LabeledInput
        label="Email"
        placeholder={tempProfile.email}
        onChange={handleChangeEmail}
        isInvalid={emailError}
      />
      <Center mt={50}>
        <Button
          isLoading={isLoading}
          isDisabled={userError || emailError}
          size="16"
          w="90%"
          borderRadius={50}
          colorScheme="primary"
          onPress={() => handleSubmitChanges()}
          bg="primary.300"
          _text={{
            fontFamily: BOLD,
            fontSize: 14,
          }}
          _pressed={{
            bg: 'primary.100',
          }}
        >
          Save
        </Button>
      </Center>
    </View>
  );
};

export default ProfileTitles;

const styles = StyleSheet.create({
  profileText: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontFamily: 'Montserrat_700Bold',
    paddingTop: 30,
  },
  photoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 1,
  },
  photoText: {
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    // borderWidth: 1,
  },
  titleFormat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    // borderWidth: 1,
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  uploadText: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
    paddingTop: 25,
  },
});
