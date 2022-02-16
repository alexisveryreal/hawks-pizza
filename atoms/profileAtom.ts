import { atom } from "recoil";
import { Profile } from "../types/profileTypes";

const profileState = atom<Profile[]>({
  key: "profileState",
  default: [],
});

export default profileState;
