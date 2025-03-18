function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, right = 0;
  let minSubArrayLenValue = Infinity;
  let windowSum = 0;
  while(right < nums.length) {
      windowSum += nums[right];
      while(windowSum >= target) {
        const currentSubArrayLen = right - left + 1;
        minSubArrayLenValue = Math.min(currentSubArrayLen, minSubArrayLenValue);
        windowSum -= nums[left];
        left++;
      }

      right++;
  }
  return minSubArrayLenValue === Infinity ? 0 : minSubArrayLenValue;
};

minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])