/*

"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false

8-4 = 4 -5 -8 0
*/

function coinSum(amount,nums,memo={}){
    if(amount in memo) return memo[amount]
    if(amount === 0) return true
    if(amount < 0) return false

    for (let i = 0; i < nums.length; i++) {
       if(coinSum(amount - nums[i],nums, memo)){
         memo[amount] = true
         return true
       }
       memo[amount] = false
    }

    
    return memo[amount]
}

console.log(coinSum(8,[5,12,4]));
console.log(coinSum(15,[4,6,10]));