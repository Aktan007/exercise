const getSymbol = (str, number) => {
  if (number < 0 || number >= str.length) {
    return "";
  }
  return str[number];
};

console.log(getSymbol("The members", 4));
console.log(getSymbol("type can in", 1));
console.log(getSymbol("an error", 20));

const removeDigit = () => {
  return;
};

const isSquare = () => {
  return;
};

const numberLength = () => {
  return;
};

const flipOver = () => {
  return;
};

export { getSymbol };
