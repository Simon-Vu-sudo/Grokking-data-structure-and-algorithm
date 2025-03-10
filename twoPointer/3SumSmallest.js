/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmallest = function (nums, target) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const target_sum = target - nums[i];
      const test = nums[left] + nums[right];
      console.log(target_sum > test);
      if (test < target_sum) {
        count += 1;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

console.log(threeSumSmallest([-1, 0, 2, 3], 3)); // 2
