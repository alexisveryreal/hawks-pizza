import { atom } from "recoil";
import { Profile } from "../types/profileTypes";

const profileState = atom<Profile>({
  key: "profileState",
  default: {
    _id: "",
    email: "someone@gmail.com",
    username: "Username",
    gender: "gender-female",
  },
});

export default profileState;
