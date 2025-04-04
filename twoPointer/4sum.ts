function fourSum(nums: number[], target: number): number[][] {
  const uniqueQuadruplets: number[][] = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length - 3; i++) {
      if(i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }

      for(let j = i + 1; j < nums.length - 2; j++) {
          if(j > i + 1 && nums[j] === nums[j - 1]) {
              continue;
          }

          let left = j + 1, right = nums.length - 1;
          while(left < right) {
              const currentRightSideEquationValue = target - nums[j] - nums[left] - nums[right];
              if(currentRightSideEquationValue === nums[i]) {
                  uniqueQuadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                  left++;
                  right--;
                  while(left < right && nums[left] === nums[left - 1]) {
                      left++;
                  }
                  while(left < right && nums[right] === nums[right + 1]) {
                      right--;
                  }
              } else if(currentRightSideEquationValue > nums[i]) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }
  return uniqueQuadruplets;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));