import httpCommon from "./http-common";
import { Profile } from "../types/profileTypes";
import { APIReturn } from "../types/apiTypes";

const getAllProfiles = async () => {
  const { data } = await httpCommon.get<APIReturn<Profile>>("/profiles");
  return data;
};

const profileService = {
  getAllProfiles,
};

export default profileService;
