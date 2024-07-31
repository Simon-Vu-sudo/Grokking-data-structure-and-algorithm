const maxArraySum = (arr, k) => {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (maxSum < windowSum) {
        maxSum = windowSum;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  console.log(maxSum);
  return maxSum;
};

maxArraySum([2, 3, 4, 1, 5], 2);

//
