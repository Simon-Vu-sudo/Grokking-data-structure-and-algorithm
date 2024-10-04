/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let smallestDifferent = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = 0,
      right = nums.length - 1;
    left = i + 1;
    while (left < right) {
      const targetDiff = target - nums[i] - nums[left] - nums[right];
      if (targetDiff === 0) {
        return target - targetDiff;
      }

      if (Math.abs(targetDiff) < Math.abs(smallestDifferent)) {
        smallestDifferent = targetDiff;
      }

      if (targetDiff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return smallestDifferent;
};

console.log(threeSumClosest([0, 0, 0], 1)); // 2
