import { APIReturn } from '../types/apiTypes';
import { Profile } from '../types/profileTypes';
import httpCommon from './http-common';

const getAllProfiles = async () => {
  const { data } = await httpCommon.get<APIReturn<Profile[]>>('/profiles');
  return data;
};

const getProfile = async (_id: string) => {
  const { data } = await httpCommon.get<APIReturn<Profile>>(`/profiles/${_id}`);
  return data;
};

const updateProfile = async ({ _id, email, gender, username }: Profile) => {
  const { data } = await httpCommon.put<APIReturn<Profile>>(
    `/profiles/${_id}`,
    {
      gender,
      email,
      username,
    },
  );
  return data;
};

const profileService = {
  getAllProfiles,
  getProfile,
  updateProfile,
};

export default profileService;
