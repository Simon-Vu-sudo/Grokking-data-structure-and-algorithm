function twoSum(nums: number[], target: number): number[] {
  const mappedRemainingValue = {};
  let returnValue = []
  for(let i = 0; i < nums.length; i++) {
      const currentRemainingValue = target - nums[i];
      
      console.log(7 in mappedRemainingValue);
      if(currentRemainingValue in mappedRemainingValue) {
          return[i, mappedRemainingValue[currentRemainingValue]]
      }
      
      mappedRemainingValue[nums[i]] = i;
  }
  return returnValue;
};

twoSum([2,7,11,15], 9)