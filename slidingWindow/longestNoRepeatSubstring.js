var lengthOfLongestSubstring = function (s) {
  let charIndexMap = {},
    windowStart = 0,
    longestSubstringLength = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }

    charIndexMap[rightChar] = windowEnd;
    windowLength = windowEnd - windowStart + 1;
    if (windowLength > longestSubstringLength)
      longestSubstringLength = windowLength;
  }

  return longestSubstringLength;
};

const value = 'abcbcbbf';

console.log(lengthOfLongestSubstring(value));
