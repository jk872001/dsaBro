

function fibTabu(n){
    if(n<=1 ) return n

    let table = Array(n+1).fill(0)
    table[1] = 1
    for (let i = 2; i <= n; i++) {
       table[i] = table[i-1] + table[i-2]
    }
    return table[n]
}

console.log(fibTabu(10));