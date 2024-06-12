// "aabcc" --> "abc"

// itterative approach
function remove(str){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== str[i+1]){
           result += str[i]
        }
    }
    return result
}
// console.log(remove("aabcc"))
// console.log(remove("abbc"))

// recursive approach
function removeRecursive(str){
    if(str.length == 1){
        return str
    }
    let start = str[0]
    let end = str.substring(1)
    if(start === end[0]){
       return removeRecursive(end)
    }else{
        return start + removeRecursive(end)
    }
}
console.log(removeRecursive("aabcc"))
console.log(removeRecursive("abbc"))
