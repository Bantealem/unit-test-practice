const calculator = require('../functions/calculator.js');
const stringCount = require('../functions/stringCount.js');
const reverseString = require('../functions/reverseString.js');
const capitalize = require('../functions/capitalize.js');


describe("Test the function stringCount", () => {
    test("Check if the function exist", () => {
        expect(stringCount).toBeDefined();
    })

test('stringCount of "Hello" should return 5', () => {
    expect(stringCount("Hello")).toBe(5);
})
test('string is less than 10 but not less 1', () => {
        expect(() => { stringCount("Hello World") }).toThrowError("String length must be less than 10");
    })

})

describe("Test the function reverseString", () => {
    test("check if the function exists", () => {
        expect(reverseString).toBeDefined();
    })
    test('reverseString of "Hello" should return "olleH"', () => {
        expect(reverseString("Hello")).toBe("olleH");
    })
    test('reverseString of "Hello World" should return "dlroW olleH', () => {
        expect(reverseString("Hello World")).toBe("dlroW olleH");
    })
})

describe("Test the function calculator", () => {
    test("check if the function exists", () => {
        expect(calculator).toBeDefined(); 
    })
})
describe("sum", () => {
    test("addtion of 2 and 2 to be 4", () => {
        const Calculator = new calculator ();
        expect(Calculator.sum(2, 2)).toBe(4);
    })
    test("addtion of 2 and 4 no to be 4", () => {
        const Calculator = new calculator ();
        expect(Calculator.sum(2, 4)).not.toBe(4);
    })
    test("addtion of 3 and 4 to be 7", () => {
        const Calculator = new calculator ();
        expect(Calculator.sum(3, 4)).toBe(7);
    })
})
describe("multiple", () => {
    test("multiple of 2 by 2 to be 4", () => {
        const Calculator = new calculator ();
        expect(Calculator.multiple(2, 2)).toBe(4);
    })
    test("multiple of 2 by 4 no to be 4", () => {
        const Calculator = new calculator ();
        expect(Calculator.multiple(2, 4)).not.toBe(4);
    })
    test("multiple of 3 by 4 to be 12", () => {
        const Calculator = new calculator ();
        expect(Calculator.multiple(3, 4)).toBe(12);
    })
})
describe("substract", () => {
    test("sustract 2 from 4  to be 2", () => {
        const Calculator = new calculator ();
        expect(Calculator.substract(4, 2)).toBe(2);
    })
    test("substract 4 from 2 no to be 4", () => {
        const Calculator = new calculator ();
        expect(Calculator.substract(2, 4)).not.toBe(4);
    })
    test("substract 3 from 4 to be 1", () => {
        const Calculator = new calculator ();
        expect(Calculator.substract(4, 3)).toBe(1);
    })
})
describe("divide", () => {
    test("devide of 4 by 2 to be 2", () => {
        const Calculator = new calculator ();
        expect(Calculator.divide(4, 2)).toBe(2);
    })
    test("divide of 2 by 4 no to be 4", () => {
        const Calculator =new calculator ();
        expect(Calculator.divide(2, 4)).not.toBe(4);
    })
    test("divide of 8 by 4 to be 2", () => {
        const Calculator = new calculator ();
        expect(Calculator.divide(8, 4)).toBe(2);
    })
})

describe("Test the function capitalize", () => {
    test("Check if the function exists", () => {
        expect(capitalize).toBeDefined ();
    })
    test("hello", () => {
        expect(capitalize("hello")).toBe("Hello");
    })

})