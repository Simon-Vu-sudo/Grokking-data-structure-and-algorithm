function checkInclusion(s1, s2) {
  let windowStart = 0,
    indexCountMap = {},
    matched = 0;

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!indexCountMap.hasOwnProperty(char)) {
      indexCountMap[char] = 0;
    }

    indexCountMap[char]++;
  }

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const rightChar = s2[windowEnd];
    if (rightChar in indexCountMap) {
      if (indexCountMap[rightChar] === 0) {
        matched++;
      }
      indexCountMap[rightChar]++;
    }

    if (matched === Object.keys(indexCountMap).length) return true;

    if (windowEnd > s1.length) {
      const leftChar = s2[windowStart];
      windowStart++;
      if (leftChar in indexCountMap) {
        if (indexCountMap[leftChar] === 0) {
          matched--;
        }
        indexCountMap[leftChar]--;
      }
    }
  }

  return false;
}

console.log(checkInclusion('hello', 'ooolleoooleh'));
