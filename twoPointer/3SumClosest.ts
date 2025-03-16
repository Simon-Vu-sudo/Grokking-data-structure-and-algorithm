function threeSumClosest(nums: number[], target: number): number {
  let smallestDiffToTaget: number = Infinity;  
  nums.sort((a, b) => a -b)

  for(let i = 0; i < nums.length; i++) {
      let right = nums.length - 1, left = i + 1;
  
      while(left < right) {
          const closestCal = target - nums[i] - nums[left] - nums[right];
          
          if(closestCal === 0) {
              return target;
          }

          if(Math.abs(smallestDiffToTaget) > Math.abs(closestCal)) {
              smallestDiffToTaget = closestCal
          }

          if(closestCal > 0) {
              left++;
          } else {
              right--;
          }
      } 
  }
  return target - smallestDiffToTaget;
};