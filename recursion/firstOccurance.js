let arr = [3, 4, 1, 8, 1, 7];
let findMe = 7;
let currIndex = 0;
// Output --> 2
// if not found return -1

// 1st itterative approach
function firstOccurance(arr,findMe,currIndex){
    while(currIndex < arr.length){
        if(arr[currIndex] === findMe){
            return currIndex
        }
        currIndex++
    }
    return -1
}
// console.log(firstOccurance(arr,findMe,currIndex))

// 2nd recursive approach
function recursiveFirstOccurance(arr,findMe,currIndex){
    if(arr[currIndex] === findMe){
        return currIndex
    }
    if(currIndex === arr.length){
        return -1
    }

    return recursiveFirstOccurance(arr,findMe,currIndex+1)
}
console.log(recursiveFirstOccurance(arr,findMe,currIndex))
