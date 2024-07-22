// madam --> true && chai --> false

// iterative approach
function isPalindrome(str){
    let reverse = ""
    let curr = str.length-1
    while(curr >= 0){
        reverse += str[curr]
        curr--
    }
    return str === reverse;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("chai"));

// recursive approach
function recursiveIsPalindrome(str){
    if(str.length === 1){
        return true
    }
    let start = str[0]
    let end = str[str.length-1]
    if(start === end){
       return recursiveIsPalindrome(str.substring(1,str.length-1))
    }else{
        return false
    }
}
console.log(recursiveIsPalindrome("madam"));
console.log(recursiveIsPalindrome("chai"));