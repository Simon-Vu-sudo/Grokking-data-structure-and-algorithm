function threeSum(nums: number[]): number[][] {
  const sumTripletsArray = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length; i++) {
      if(i > 0 && nums[i] === nums[i - 1]) {
          continue;
      };
      findSumTripletPushToArray(nums, -nums[i], i + 1, sumTripletsArray)
  }
  return sumTripletsArray;
};

function findSumTripletPushToArray(nums: number[], targetSum: number, nextIndex, sumTripletsArray) {
  let left = nextIndex;
  let right = nums.length - 1;
  while(left < right) {
      const currentSum = nums[left] + nums[right];
      if(targetSum === currentSum) {
          sumTripletsArray.push([-targetSum, nums[left], nums[right]])
          left++;
          right--
          while(left < right && nums[left] === nums[left - 1]) {
              left++;
          }
          while(left < right && nums[right] === nums[right + 1]) {
              right--;
          }
      } else if (currentSum < targetSum) {
          left++;
      } else {
          right--;
      }
  } 
}