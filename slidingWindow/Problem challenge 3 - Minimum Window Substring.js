/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let windowStart = 0,
    patternMap = {},
    matched = 0,
    substringStr = 0,
    minLength = s.length + 1;
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (rightChar in patternMap) {
      patternMap[rightChar]--;

      if (patternMap[rightChar] >= 0) {
        matched++;
      }
    }

    while (matched === t.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substringStr = windowStart;
      }
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
  if (minLength > s.length) return '';

  return s.substring(substringStr, minLength + substringStr);
};
