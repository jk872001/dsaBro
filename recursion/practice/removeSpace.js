// task is to remove all tabs and spaces from a string. This includes the character \t and " " from a string

// 1st iterative approach
function remove(str){
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " " && str[i] !== "/t"){
            result += str[i]
        }
    }
    return result
}
// console.log(remove("J ites  h"))

function recursiveRemove(str){
    if(!str.length){
        return ""
    }
    let start = str[0]
    let end = str.substring(1)
    if(start == " " || start == "/t"){
        return recursiveRemove(end)
    }else{
        return start + recursiveRemove(end)
    }
}
console.log(recursiveRemove("J ites  h"))
console.log(recursiveRemove(" J ites  h "))
