const longestKSubString = (arr, k) => {
  let obj = {};
  let windowStart = 0;
  let maxLength = 0;
  const frequency = {};
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightChar = arr[windowEnd];

    if (!(rightChar in frequency)) {
      frequency[rightChar] = 0;
    }

    frequency[rightChar] += 1;
    while (Object.keys(frequency).length > k) {
      const leftChar = arr[windowStart];
      frequency[leftChar] -= 1;

      if (frequency[leftChar] === 0) {
        delete frequency[leftChar];
      }

      windowStart++;
    }
    if (maxLength < windowEnd - windowStart + 1) {
      maxLength = windowEnd - windowStart + 1;
    }
  }
  return maxLength;
};

longestKSubString('araaci', 2);
