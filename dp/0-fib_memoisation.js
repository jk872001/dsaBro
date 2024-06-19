
function fibMemo(n,memo={}){
    if(n in memo) return n
    if(n<=1) return n
    memo[n] = fibMemo(n-1) + fibMemo(n-2)
    return memo[n]
}

console.log(fibMemo(10))
