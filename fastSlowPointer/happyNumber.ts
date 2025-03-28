function isHappy(n: number): boolean {
  if(n === 1) return true;
  let slow = n, fast = findSquaredNumber(n);
  
  while(slow !== fast) {
      slow = findSquaredNumber(slow);
      fast = findSquaredNumber(findSquaredNumber(fast))
  }

  return fast === 1;
};

function findSquaredNumber(num: number) {
  let totalSum = 0;
  while (num > 0) {
      let temp = Math.floor(num / 10),
      digit = num % 10;
      num = temp;
      totalSum += digit ** 2;
  }
return totalSum;
}

