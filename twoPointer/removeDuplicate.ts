function removeDuplicates(nums: number[]): number {
  const mappedDuplicate = {}, j = 0;

  for(let i = 0; i < nums.length; i++) {
      if(!(nums[i] in mappedDuplicate)) {
          mappedDuplicate[nums[i]] = i;
          nums[j] = nums[i];
      }
  }
  return Object.keys(mappedDuplicate).length;
};

removeDuplicates([1,1,2]); // 2