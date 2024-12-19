/**
 * Palindrome
 * 
 * kayak
 * racecar
 * rotator
 * wow
 */
export function isPalindrome(word: string): boolean {
    const drow = word.split("").reverse().join("")
    return word === drow;
}