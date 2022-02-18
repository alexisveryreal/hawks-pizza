const replaceItemAtIndex = <T>(arr: T[], index: number, newValue: T) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = <T>(arr: T[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const arrayUtils = {
  replaceItemAtIndex,
  removeItemAtIndex,
};

export default arrayUtils;
