/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let startingPointer = 0,
    endPointer = nums.length - 1,
    sum = 0;

  while (startingPointer < endPointer) {
    sum = nums[startingPointer] + nums[endPointer];
    if (sum > target) {
      endPointer--;
    } else if (sum < target) {
      startingPointer++;
    } else {
      return [startingPointer, endPointer];
    }
  }
  return [-1, -1];
};

console.log(twoSum([3, 2, 4], 6));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let mappingNums = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
    if (target - num in mappingNums) {
      console.log(i, mappingNums[target - num]);
      return [i, mappingNums[target - num]];
    }
    mappingNums[num] = i;
  }
  return false;
};

console.log(twoSum2([3, 2, 4], 6));
