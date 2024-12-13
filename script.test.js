const functions = require("./script.js");

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

test("CaesarCipher very basic shift", () => {
    expect(functions.caesarCipher("AB",1)).toBe("BC");
});