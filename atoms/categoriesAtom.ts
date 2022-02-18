import { atom } from 'recoil';

import categoriesData, { CategoriesObj } from '../assets/data/categoriesData';

const categoryState = atom<CategoriesObj[]>({
  key: 'categoryState',
  default: categoriesData,
});

export default categoryState;
