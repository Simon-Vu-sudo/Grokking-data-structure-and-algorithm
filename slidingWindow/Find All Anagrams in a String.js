/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let windowStart = 0,
    patternMap = {},
    indicesAnagrams = [],
    matched = 0;

  for (let i = 0; i < p.length; i++) {
    const char = p[i];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char]++;
  }
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (rightChar in patternMap) {
      patternMap[rightChar]--;

      if (patternMap[rightChar] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(patternMap).length) {
      indicesAnagrams.push(windowStart);
    }

    if (windowEnd >= p.length - 1) {
      const leftChar = s[windowStart];
      windowStart++;

      if (leftChar in patternMap) {
        if (patternMap[leftChar] === 0) {
          matched--;
        }
        patternMap[leftChar]++;
      }
    }
  }

  return indicesAnagrams;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
