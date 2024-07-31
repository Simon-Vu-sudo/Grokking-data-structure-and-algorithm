const contiguousSubarray = (arr, k) => {
  const result = [];
  let windowStart = 0;
  let windowSum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      // result.push(arrayKSum / k);
      result[windowStart] = windowSum / k;
      windowSum -= arr[windowEnd];
      windowStart++;
    }
  }
  console.log(result);
  return result;
};

contiguousSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
