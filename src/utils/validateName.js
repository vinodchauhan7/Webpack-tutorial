export const checkLettersOnly = input => {
  if (/^[a-zA-Z]+$/.test(input)) {
    return true;
  }
  return false;
};
