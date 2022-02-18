import { atom } from 'recoil';

export type ColorScheme = 'light' | 'dark';

export const darkModeState = atom<ColorScheme>({
  key: 'darkModeState',
  default: 'light',
});
