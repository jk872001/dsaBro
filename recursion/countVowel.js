// itterative

function isVowel(char){
    let lowerCase = char.toLowerCase()
    let vowels = "aeiou"
    if(vowels.indexOf(lowerCase) != -1) return true
    return false
}

function countVowels(str){
   let count=0;
   for (let i = 0; i < str.length; i++) {
    if(isVowel(str[i])) count++
     }
     return count
}
// console.log(countVowels("hello"))

function recursiveCountVowels(str){
    if(str.length === 1) return isVowel(str)
    return recursiveCountVowels(str.substring(0,str.length-1)) + isVowel(str[str.length-1])
}
console.log(recursiveCountVowels("Jitesh"))
