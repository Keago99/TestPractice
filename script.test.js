const functions = require("./script.js");
const cipher = require("./ceasarCipher.js");

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

test("ceasarCipher", () => {
    expect(cipher.ceasarCipher("abc!",1)).toBe("bcd!");
});

test("ceasarCipher advanced", () => {
    expect(cipher.ceasarCipher("a!b+c.;d",131)).toBe("b!c+d.;e");
});