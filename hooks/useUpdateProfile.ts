import { useToast } from 'native-base';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import profileService from '../api/profile';
import profileState from '../atoms/profileAtom';

const useUpdateProfile = () => {
  const setProfile = useSetRecoilState(profileState);
  const toast = useToast();
  const id = 'Success-toast';

  const {
    mutate: updateProfile,
    isLoading,
    isSuccess,
  } = useMutation(profileService.updateProfile, {
    onSuccess: (res) => {
      setProfile({ ...res.data });
      if (!toast.isActive(id)) {
        toast.show({ id, title: 'Saved!' });
      }
    },
    onError: (err) => {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      if (!toast.isActive(id)) {
        toast.show({ id, title: 'Error!' });
      }
    },
  });
  return { updateProfile, isLoading, isSuccess };
};

export default useUpdateProfile;
