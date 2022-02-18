import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import profileService from '../api/profile';
import profileState from '../atoms/profileAtom';

const useProfile = (_id: string) => {
  const setProfile = useSetRecoilState(profileState);

  const {
    data: profileSingle,
    refetch: getProfile,
    isLoading,
  } = useQuery(
    ['getProfile'],
    async () => {
      return await profileService.getProfile(_id);
    },
    {
      onSuccess: (res) => {
        console.log('profile! ', res.data);
        setProfile({ ...res.data });
      },
      onError: (err) => {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      },
      enabled: false,
    },
  );
  return { profileSingle, getProfile, isLoading };
};

export default useProfile;
