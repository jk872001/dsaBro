// find gcd of two numbers
// input : 42 and 18
// output : 6
// 42 divisiors are 1, 2, 3, 6, 7, 14, 21, 42
// 18 divisiors are 1, 2, 3, 6, 9, 18

// recursive approach
function gcd(m,n){
    if(m === n){
     return m
    } 
    if(m > n){
     return gcd(m-n,n)
    }else{
     return gcd(m,n-m)
    }
 }
 console.log(gcd(42,18))