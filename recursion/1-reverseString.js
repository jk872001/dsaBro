// itterative

function reverseString(str){
    let reverse = ""
    let length = str.length-1
    while(length >= 0){
        reverse = reverse + str[length]
        length--;
    }
    return reverse
}

// console.log(reverseString("hello"))

function recursiveReverseString(str){
    if(!str) return str
    return str[str.length-1] + recursiveReverseString(str.substring(0,str.length-1))
}
console.log(recursiveReverseString("hello"))