import { useQuery } from "react-query";
import profileService from "../api/profile";
import { useRecoilState } from "recoil";
import profileState from "../atoms/profileAtom";
import arrayUtils from "../utils/arrayUtils";
import { Profile } from "../types/profileTypes";

const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);

  const {
    data: allProfiles,
    refetch: getAllProfiles,
    isLoading,
  } = useQuery(["allProfiles"], profileService.getAllProfiles, {
    onSuccess: (res) => {
      console.log("All Profiles: ", res);
      const temp = arrayUtils.replaceItemAtIndex<Profile>(profile, 0, {
        ...profile[0],
        ...res.data,
      });
      setProfile(temp);
    },
    onError: (err) => {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    },
    enabled: false,
  });
  return { allProfiles, getAllProfiles, isLoading };
};

export default useProfile;
