function minSubArrayLen(target: number, nums: number[]): number {
  let smallestSubArrayLength = Infinity, left = 0, subArraySum = 0;
  for(let right = 0; right < nums.length; right++) {
      subArraySum += nums[right];

      while(subArraySum >= target && left <= right) {
          smallestSubArrayLength = Math.min(smallestSubArrayLength, right - left + 1);
          subArraySum -= nums[left];
          left++;
      }
  }

  return smallestSubArrayLength === Infinity ? 0 : smallestSubArrayLength;
};