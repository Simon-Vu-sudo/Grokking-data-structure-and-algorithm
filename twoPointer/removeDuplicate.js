/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let mappingNums = {},
    j = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!(num in mappingNums)) {
      mappingNums[num] = i;
      nums[j] = nums[i];
      j++;
    }
  }
  return Object.keys(mappingNums).length;
};

console.log(removeDuplicates([1, 1, 2]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
  let nextNoneDuplicate = 1,
    i = 0;
  while (i < nums.length) {
    if (nums[nextNoneDuplicate - 1] !== nums[i]) {
      nums[nextNoneDuplicate] = nums[i];
      nextNoneDuplicate++;
    }
    i++;
  }
  return nextNoneDuplicate;
};

console.log(removeDuplicates2([1, 1, 2]));
