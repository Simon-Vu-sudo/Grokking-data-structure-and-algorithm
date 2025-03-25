/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
  let left = 0, right = nums.length - 1, i = 0;
  while(i <= right) {
    if(nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[left];
      nums[left] = temp;
      left++; 
      i++;
    }
    else if(nums[i] === 1) {
      i++ 
    }
    if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[right];
      nums[right] = temp;
      right--; 
    }   
  }
};

console.log(sortColors([2, 0, 1]))