// find length of string without using .length

function findLength(str){
    if(str === ""){
        return 0
    }
    return 1 + findLength(str.substring(1))
}
console.log(findLength("Jitesh"))
console.log(findLength("chai"))