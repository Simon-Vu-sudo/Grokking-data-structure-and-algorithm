var longestOnes = function (nums, k) {
  let windowStart = 0,
    maxCountOneSubstring = 0,
    maxLength = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) {
      maxCountOneSubstring++;
    }

    console.log(windowEnd, windowStart, maxCountOneSubstring);
    if (windowEnd - windowStart + 1 - maxCountOneSubstring > k) {
      if (nums[windowStart] === 1) {
        maxCountOneSubstring--;
      }
      windowStart++;
    }

    const temp = windowEnd - windowStart + 1;
    maxLength = temp > maxLength ? temp : maxLength;
  }

  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
