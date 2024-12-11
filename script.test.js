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