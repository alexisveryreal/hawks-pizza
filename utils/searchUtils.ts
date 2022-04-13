import popularData from '../assets/data/popularData';
import popularSeaData from '../assets/data/popularSeaData';
import popularSodaData from '../assets/data/popularSodaData';
import { PopularTypes } from '../atoms/popularAtom';

export const searchFilter = <T, K extends keyof T, V extends keyof T[K]>(
  arr: T[],
  text: string,
  key: K,
  subKey?: V,
) => {
  let search = text;

  if (!search) {
    return arr;
  }

  search = search.toLowerCase();

  const filteredList = arr.filter(
    (item) =>
      `${subKey ? item[key][subKey] : item[key]}`
        .toLowerCase()
        .indexOf(search) > -1,
  );

  return filteredList;
};

export const resetSearchData = (
  originalPopular: PopularTypes,
  text: string,
  searchLength: number,
  setFilteredData: React.Dispatch<React.SetStateAction<PopularTypes>>,
  setNotFound: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let temp: PopularTypes['data'];
  if (text.length <= searchLength) {
    switch (originalPopular.kind) {
      case 'Pizza':
        temp = searchFilter(popularData, text, 'title');
        setFilteredData({ kind: 'Pizza', data: temp });
        break;
      case 'Seafood':
        temp = searchFilter(popularSeaData, text, 'title');
        setFilteredData({ kind: 'Seafood', data: temp });
        break;
      case 'Soda':
        temp = searchFilter(popularSodaData, text, 'title');
        setFilteredData({ kind: 'Soda', data: temp });
        break;
    }
    setNotFound(false);
  } else {
    switch (originalPopular.kind) {
      case 'Pizza':
        temp = searchFilter(originalPopular.data, text, 'title');
        if (temp.length !== 0) {
          setFilteredData({ kind: 'Pizza', data: temp });
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        break;
      case 'Seafood':
        temp = searchFilter(originalPopular.data, text, 'title');
        if (temp.length !== 0) {
          setFilteredData({ kind: 'Seafood', data: temp });
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        break;
      case 'Soda':
        temp = searchFilter(originalPopular.data, text, 'title');
        if (temp.length !== 0) {
          setFilteredData({ kind: 'Soda', data: temp });
          setNotFound(false);
        } else {
          setNotFound(true);
        }
        break;
    }
  }
};
