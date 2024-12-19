import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { isPalindrome, isPalindromeV2 } from "../src/palindrome.ts";

const testCases = [
    { word: "kayak", expected: true },
    { word: "racecar", expected: true },
    { word: "rotator", expected: true },
    { word: "wow", expected: true },
    { word: "hello", expected: false },
];

describe("isPalindrome", () => {
    for (const testCase of testCases) {
        it(`should return ${testCase.expected} for ${testCase.word}`, () => {
            const result = isPalindrome(testCase.word);
            expect(result).toBe(testCase.expected);
        });
    }
});

describe("isPalindrome2", () => {
    for (const testCase of testCases) {
        it(`should return ${testCase.expected} for ${testCase.word}`, () => {
            const result = isPalindromeV2(testCase.word);
            expect(result).toBe(testCase.expected);
        });
    }
});