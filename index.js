function sum(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function checkIfCapitalized(str) {
  return str.charAt(0).toUpperCase() === str.charAt(0);
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt();
      if (code >= 65 && code <= 90) {
        const shiftedCode = ((code - 65 + shift) % 26) + 65;
        return String.fromCharCode(shiftedCode);
      } else if (code >= 97 && code <= 122) {
        const shiftedCode = ((code - 97 + shift) % 26) + 97;
        return String.fromCharCode(shiftedCode);
      } else {
        return char;
      }
    })
    .join("");
}
function analyzeArray(arr) {
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
const object = analyzeArray([1, 8, 3, 4, 2, 6]);
object ==
  {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

module.exports = {
  sum: sum,
  checkIfCapitalized: checkIfCapitalized,
  reverseString: reverseString,
  divide: divide,
  multiply: multiply,
  subtract: subtract,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
};
