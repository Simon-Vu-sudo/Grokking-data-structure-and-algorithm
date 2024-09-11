/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let windowStart = 0,
    patternMap = {},
    matched = 0;
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!(char in patternMap)) {
      patternMap[char] = 0;
    }
    patternMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const rightChar = s2[windowEnd];

    if (rightChar in patternMap) {
      console.log(rightChar);
      patternMap[rightChar]--;
      if (patternMap[rightChar] === 0) {
        console.log(patternMap[rightChar]);
        matched++;
      }
    }
    if (matched === Object.keys(patternMap).length) return true;
    console.log(rightChar);
    if (windowEnd >= s1.length - 1) {
      const leftChar = s2[windowStart];

      windowStart++;
      console.log(rightChar);
      console.log(leftChar in patternMap);
      if (leftChar in patternMap) {
        console.log(leftChar);
        if (patternMap[leftChar] === 0) {
          matched--;
        }
        patternMap[leftChar]++;
      }
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidboaoo')); // true
