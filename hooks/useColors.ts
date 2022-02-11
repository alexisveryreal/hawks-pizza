import { darkModeState } from "../atoms/darkModeAtom";
import { useRecoilValue } from "recoil";
import colors from "../assets/colors/colors";

export const useColors = () => {
  const colorScheme = useRecoilValue(darkModeState);

  return {
    colors: colors[colorScheme],
  };
};
