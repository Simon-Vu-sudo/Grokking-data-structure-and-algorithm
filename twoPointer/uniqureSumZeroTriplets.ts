/**
 * Find all unique triplets in the array that sum to zero
 * @param {number[]} nums - Input array of numbers
 * @return {number[][]} - Array of triplets that sum to zero
 */
const threeSum = (nums: number[]): number[][] => {
  const triplets: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    findTwoSum(nums, -nums[i], i + 1, triplets);
  }
  return triplets;
};

/**
 * Helper function to find pairs that sum to the target value
 * @param nums - Input array of numbers
 * @param target - Target sum to look for
 * @param left - Starting index for the left pointer
 * @param triplets - Reference to the array storing results
 */
const findTwoSum = (nums: number[], target: number, left: number, triplets: number[][]): void => {
  let right: number = nums.length - 1;
  while (left < right) {
    const currentSum: number = nums[left] + nums[right];

    if (target === currentSum) {
      triplets.push([-target, nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]