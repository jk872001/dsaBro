// Input = ["(", "(", ")", ")", "(", ")"]

// iterative
function balance(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "("){
            count++;
        }else if(arr[i] === ")"){
            count--
        }
    }
    return count === 0 ? true : false
}

// console.log(balance(["(", "(", ")", ")", "(", ")"]));
// console.log(balance(["(", "(", ")", "(", ")", ")"]));

// recursive approach
function recursiveBalance(arr,start=0,counter=0){
    if(start === arr.length){
        return counter === 0
    }
    if(counter < 0){
        return false
    }
    if(arr[start] === "("){
        return recursiveBalance(arr,start+1,counter+1)
    }else if(arr[start] === ")"){
        return recursiveBalance(arr,start+1,counter-1)
    }else{
        return false
    }
}

console.log(recursiveBalance(["(", "(", ")", ")", "(", ")"]));
console.log(recursiveBalance(["(", "(", ")", ")", ")"]));