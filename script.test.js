const functions = require("./script.js");
const cipher = require("./ceasarCipher.js");
const arrayFunctions = require("./numberArray.js");

test("Capitalizes the input string", () => {
    expect(functions.captialize("dog")).toBe("Dog");
});

test("String reversal", () => {
    expect(functions.reverseString("hello")).toBe("olleh");
});

test("Calculator addition", () => {
    expect(functions.calculator.add(1,2)).toBe(3);
});

test("Calculator subtraction", () => {
    expect(functions.calculator.subtract(5,3)).toBe(2);
});

test("Calculator multiplication", () => {
    expect(functions.calculator.multiply(5,3)).toBe(15);
});

test("ceasarCipher basic", () => {
    expect(cipher.ceasarCipher("abc!",1)).toBe("bcd!");
});

test("ceasarCipher advanced", () => {
    expect(cipher.ceasarCipher("a!B+c.;D",131)).toBe("b!C+d.;E");
});

test("ArrayAnalyzer simple", () => {
    expect(arrayFunctions.analyzeArray([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      });
});