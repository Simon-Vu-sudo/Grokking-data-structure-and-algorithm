function removeDuplicates(nums: number[]): number {
  let j = 1;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

removeDuplicates([1,1,2]); // 2