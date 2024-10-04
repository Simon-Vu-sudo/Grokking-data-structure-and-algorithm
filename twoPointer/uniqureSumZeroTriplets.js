/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    findTwoSum(nums, -nums[i], i + 1, triplets);
  }
  return triplets;
};

const findTwoSum = (nums, target, left, triplets) => {
  let right = nums.length - 1;
  while (left < right) {
    const currentSum = nums[left] + nums[right];

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
      right++;
    }
  }
};

console.log(threeSum([1, -1, -1, 0])); // [[-1,-1,2],[-1,0,1]]
