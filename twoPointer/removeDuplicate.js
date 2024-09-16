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

//similar problem
// To do this problem we will use two pointer which is creating one pointer for creating and adding the value that is not equal to the key to a new array.
const removeDiplicatesWithUnsortedArray = (nums, key) => {
  let filteredArrayLength = 0;
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number !== key) {
      filteredArrayLength++;
    }
  }
  return filteredArrayLength;
};

console.log(removeDiplicatesWithUnsortedArray([2, 11, 2, 2, 1], 2));
