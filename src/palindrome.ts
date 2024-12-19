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
    return word === drow
}

export function isPalindromeV2(word: string): boolean {
    const drow: string[] = []
    const split = word.split("")
    for (let i = split.length; i >= 0; i--) {
        drow.push(split[i])
    }

    return word === drow.join("")
}