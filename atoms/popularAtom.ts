import { atom } from 'recoil';

import popularData, { PopularData } from '../assets/data/popularData';
import { PopularSodaData } from '../assets/data/popularSodaData';

export type PopularTypes =
  | {
      kind: 'Pizza';
      data: PopularData[];
    }
  | {
      kind: 'Soda';
      data: PopularSodaData[];
    };

const popularState = atom<PopularTypes>({
  key: 'popularState',
  default: { kind: 'Pizza', data: popularData },
});

export default popularState;
