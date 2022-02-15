import { useQuery } from "react-query";
import profileService from "../api/profile";

const useProfile = () => {
  const {
    data: allProfiles,
    refetch: getAllProfiles,
    isLoading,
  } = useQuery(
    ["allProfiles"],
    async () => {
      return await profileService.getAllProfiles();
    },
    {
      onSuccess: (res) => {
        console.log("All Profiles: ", res);
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
  return { allProfiles, getAllProfiles, isLoading };
};

export default useProfile;
