const getSymbol = (str, number) => {
  if (number < 0 || number >= str.length) {
    return "";
  }
  return str[number];
};

console.log(getSymbol("The members", 4));
console.log(getSymbol("type can in", 1));
console.log(getSymbol("an error", 20));

const removeDigit = (array) => {
  const gtr = String(array);
  const btrDigit = gtr[0];
  const ztrDigit = gtr[2];
  return parseInt(btrDigit + ztrDigit);
};

console.log(removeDigit(208));
console.log(removeDigit(109));
console.log(removeDigit(940));

const isSquare = () => {
  return;
};

const numberLength = () => {
  return;
};

const flipOver = (str) => {
  return str.split("").reverse().join("");
};

console.log(flipOver("hello"));
console.log(flipOver("swap"));
console.log(flipOver("John Doe"));

export { getSymbol, removeDigit, flipOver };
