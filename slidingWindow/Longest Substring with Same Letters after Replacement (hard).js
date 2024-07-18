const longestSubstringLengthRepeatByK = (s, k) => {
  let windowStart = 0,
    charIndexMap = {},
    maxLength = 0,
    maxRepeatedString = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (!(rightChar in charIndexMap)) {
      charIndexMap[rightChar] = 0;
    }

    charIndexMap[rightChar] += 1;
    maxRepeatedString =
      charIndexMap[rightChar] > maxRepeatedString
        ? charIndexMap[rightChar]
        : maxRepeatedString;

    if (windowEnd - windowStart + 1 - maxRepeatedString > k) {
      const leftChar = s[windowStart];
      charIndexMap[leftChar] -= 1;
      windowStart++;
    }

    maxLength =
      windowEnd - windowStart + 1 > maxLength
        ? windowEnd - windowStart + 1
        : maxLength;
  }

  return maxLength;
};

console.log(longestSubstringLengthRepeatByK('AABABBA', 1));
