import { useMutation } from "react-query";
import profileService from "../api/profile";
import { useRecoilState } from "recoil";
import profileState from "../atoms/profileAtom";
import arrayUtils from "../utils/arrayUtils";
import { Profile } from "../types/profileTypes";

const useUpdateProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);

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
    }
  );
  return { updateProfile, isLoading };
};

export default useUpdateProfile;
