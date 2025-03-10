const smallestSubarraySum = (target, nums) => {
  let minTargetSubArraySum = Infinity;
  let accumulateSumArray = 0;
  let windowLeft = 0;
  for(let windowRight = 0; windowRight < nums.length; windowRight++) {
    accumulateSumArray +=  nums[windowRight];
    while(accumulateSumArray >= target) {  
      if(minTargetSubArraySum > windowRight - windowLeft + 1) {
        minTargetSubArraySum = windowRight - windowLeft + 1;
      }
      console.log('accumulateSumArray: ', accumulateSumArray);
        accumulateSumArray -= nums[windowLeft];
        windowLeft++;
    } 
  }
  return minTargetSubArraySum === Infinity ? 0 : minTargetSubArraySum;
};

console.log(smallestSubarraySum(11, [2,3,1,2,4,3]));
