import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import profileService from '../api/profile';
import profileState from '../atoms/profileAtom';

const useUpdateProfile = () => {
  const setProfile = useSetRecoilState(profileState);

  const { mutate: updateProfile, isLoading } = useMutation(
    profileService.updateProfile,
    {
      onSuccess: (res) => {
        setProfile({ ...res.data });
      },
      onError: (err) => {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      },
    },
  );
  return { updateProfile, isLoading };
};

export default useUpdateProfile;
