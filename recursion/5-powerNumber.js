// 1st approach itterative
function powerNumber(n,e){
    return Math.pow(n,e)
}
// console.log(powerNumber(2,4))

// 2nd recursive approach
function recursivePowerNumber(n,e){
   if(e === 0)
   {
    return 1
   }
   return n * recursivePowerNumber(n,e-1)
}
console.log(recursivePowerNumber(2,4))
