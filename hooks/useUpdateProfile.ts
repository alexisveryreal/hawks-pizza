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
        const index = profile.findIndex((value) => value._id === res.data._id);
        const newProfile = arrayUtils.replaceItemAtIndex<Profile>(
          profile,
          index,
          {
            ...profile[index],
            email: res.data.email,
            gender: res.data.gender,
            username: res.data.username,
          }
        );
        setProfile(newProfile);
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
