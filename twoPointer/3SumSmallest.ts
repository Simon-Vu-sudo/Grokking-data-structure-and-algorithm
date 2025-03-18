function threeSumSmallest(nums: number[], target: number): number {
   let smallestTripletsCount = 0;
   const sortedNums = nums.sort((a, b) => a - b);
   for(let i = 0; i < sortedNums.length; i++) {
     let left = i + 1, right = sortedNums.length - 1;
     if(sortedNums[i] === sortedNums[left]) continue;
     while(left < right) {
      const currentTripletSum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if(currentTripletSum < target) {
        smallestTripletsCount++;
        while(left < right && sortedNums[left] === sortedNums[left - 1]) left++;
        smallestTripletsCount++;

        left++;
      } else {
        right--;
      }
      while(left < right && sortedNums[left] === sortedNums[left - 1]) left++;
      
      while(left < right && sortedNums[right] === sortedNums[right + 1]) right--;
      
    }
    
  }
  return smallestTripletsCount;
};  

console.log(threeSumSmallest([-1, 0, 2,4,3,3,3,3,-1,2, 3], 3)); // 2
