// recursive approach (need to find some from 1 to n)
function recursiveFindSum(n){
    if(n === 1){
     return n;
    }
    return n + recursiveFindSum(n-1)
 }
 console.log(recursiveFindSum(5))