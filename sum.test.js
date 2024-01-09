const {
  sum,
  checkIfCapitalized,
  reverseString,
  divide,
  multiply,
  subtract,
  caesarCipher,
  analyzeArray,
} = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("check if capitalized", () => {
  expect(checkIfCapitalized("Sebastian")).toBe(true);
});
test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("divide", () => {
  expect(divide(4, 2)).toBe(2);
});
test("multiply", () => {
  expect(multiply(4, 2)).toBe(8);
});
test("subtract", () => {
  expect(subtract(4, 2)).toBe(2);
});
test("caesar cipher", () => {
  expect(caesarCipher("Beware the Ides of March", 5)).toBe(
    "Gjbfwj ymj Nijx tk Rfwhm",
  );
});
test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
