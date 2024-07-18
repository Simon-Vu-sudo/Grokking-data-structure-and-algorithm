const arr = [2, 1, 5, 1, 3, 2];

const findMaxSubArray = (arr, k) => {
  let windowSum = 0,
    windowStart = 0,
    maxSubArray = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSubArray = Math.max(maxSubArray, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSubArray;
};
console.log(findMaxSubArray(arr, 3));
