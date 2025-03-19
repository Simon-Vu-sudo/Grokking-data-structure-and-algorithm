function numSubarrayTwoPointerProductLessThanK(nums: number[], k: number): number {
  if(k <= 1) return 0; 
  let windowProduct = 1;
  let count = 0, right = 0, left = 0;

  while(right < nums.length) {

      windowProduct *= nums[right];
      while(windowProduct >= k) {
          windowProduct /= nums[left];
          left++;
      }
      
      count += right - left + 1;
      right++;
  }
  return count;
};

numSubarrayTwoPointerProductLessThanK([10,5,2,6], 100) //100