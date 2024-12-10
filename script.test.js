const {captialize, reverseString} = require("./script.js");

test("Capitalizes the input string", () => {
    expect(captialize("dog")).toBe("Dog");
});

test("String reversal", () => {
    expect(reverseString("hello")).toBe("olleh");
});