import { useRecoilValue } from 'recoil';

import colors from '../assets/colors/colors';
import { darkModeState } from '../atoms/darkModeAtom';

export const useColors = () => {
  const colorScheme = useRecoilValue(darkModeState);

  return {
    colors: colors[colorScheme],
  };
};
