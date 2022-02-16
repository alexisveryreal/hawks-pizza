import { useQuery } from "react-query";
import profileService from "../api/profile";
import { useRecoilState } from "recoil";
import profileState from "../atoms/profileAtom";

const useProfile = (_id: string) => {
  const [profile, setProfile] = useRecoilState(profileState);

  const {
    data: profileSingle,
    refetch: getProfile,
    isLoading,
  } = useQuery(
    ["getProfile"],
    async () => {
      return await profileService.getProfile(_id);
    },
    {
      onSuccess: (res) => {
        console.log("profile! ", res.data);
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
    }
  );
  return { profileSingle, getProfile, isLoading };
};

export default useProfile;
