const smallestSubarraySum = (S, nums) => {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    while (windowSum >= S) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
      }
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(smallestSubarraySum(11, [1, 1, 1, 1, 1, 1, 1, 1]));
