function houseRobber(arr, i, memo = {}) {
  if (i >= arr.length) return 0;
  if (i in memo) return memo[i];
  let pick = arr[i] + houseRobber(arr,i + 2,memo);
  let notPick = houseRobber(arr,i+1,memo);
  memo[i] = Math.max(pick, notPick);
  return memo[i];
}
console.log(houseRobber([3,5,1,6,8],0));