/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;
    let sArr = s.split("");

    while (start < end) {
        while (start < sArr.length) {
            const ch = sArr[start];
            if (
                ch === "a" ||
                ch === "A" ||
                ch === "e" ||
                ch === "E" ||
                ch === "i" ||
                ch === "I" ||
                ch === "o" ||
                ch === "O" ||
                ch === "u" ||
                ch === "U"
            ) {
                break;
            }
            start++;
        }

        while (end >= 0) {
            const ch = sArr[end];
            if (
                ch === "a" ||
                ch === "A" ||
                ch === "e" ||
                ch === "E" ||
                ch === "i" ||
                ch === "I" ||
                ch === "o" ||
                ch === "O" ||
                ch === "u" ||
                ch === "U"
            ) {
                break;
            }
            end--;
        }

        if (start >= end) {
            break;
        }

        const tmp = sArr[start];
        sArr[start] = sArr[end];
        sArr[end] = tmp;
        start++;
        end--;
    }

    return sArr.join("");
};
// console.log(reverseVowels("aA"));
// console.log(reverseVowels("hello"));
// console.log(reverseVowels("h"));
// console.log(reverseVowels("eo"));
// console.log(reverseVowels("o"));
// console.log(reverseVowels(""));
