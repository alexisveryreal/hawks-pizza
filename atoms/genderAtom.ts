import { atom } from "recoil";

export type GenderSelected = {
  id: number;
  name:
    | "gender-female"
    | "gender-male"
    | "gender-non-binary"
    | "gender-transgender";
  selected: boolean;
};

export const genderState = atom<GenderSelected[]>({
  key: "genderState",
  default: [
    {
      id: 1,
      name: "gender-female",
      selected: true,
    },
    {
      id: 2,
      name: "gender-male",
      selected: false,
    },
    {
      id: 3,
      name: "gender-non-binary",
      selected: false,
    },
    {
      id: 4,
      name: "gender-transgender",
      selected: false,
    },
  ],
});
