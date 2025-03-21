function sortedSquares(nums: number[]): number[] {
  let left = 0, right = nums.length - 1, reverseIndex = nums.length - 1;
  let sortedSquaresOutput: number[] = [];
  while(left <= right) {
      const squaredLeft = nums[left] * nums[left];
      const squaredRight = nums[right] * nums[right];
      if(squaredLeft > squaredRight) {
        sortedSquaresOutput[reverseIndex] = squaredLeft;
        left++;
      } else {
        sortedSquaresOutput[reverseIndex] = squaredRight;
        right--;
      }
      reverseIndex--;
  }

  return sortedSquaresOutput;
};

sortedSquares([-4,-1,0,3,10])