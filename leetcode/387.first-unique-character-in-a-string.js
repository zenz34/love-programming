/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        // const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

        if (!map[ch]) {
            map[ch] = i;
        } else {
            map[ch] = -1;
        }
    }

    // const letter = 'abcdefghijklmnopqrstuvwxyz';
    let ans = Number.MAX_SAFE_INTEGER;
    for (let idx in map) {
        if (map[idx] === -1) continue;
        ans = Math.min(map[idx], ans);
    }

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

const str = "leetcode";
console.log(firstUniqChar(str));
