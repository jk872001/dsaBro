
const typerSpan = document.getElementById("typer-span")
let words=["Love","mast","jhakaas","weird"]

let typeDelay = 200
let nextLetterDelay = 600

let index = 0
let charIndex = 0



window.addEventListener("DOMContentLoaded",()=>{
   if(words.length){
      setTimeout(type,nextLetterDelay)
   }
})

function type(){
    if(charIndex<words[index].length){
        typerSpan.textContent += words[index].charAt(charIndex)
        charIndex++;
        setTimeout(type,typeDelay)
    }else{
        setTimeout(erase,nextLetterDelay)
    }
}

function erase(){
    if(charIndex > 0){
        typerSpan.textContent = words[index].substring(0,charIndex-1)
        charIndex--;
        setTimeout(erase,typeDelay)
    }else{
        index++;
        if(index >= words.length){
            index = 0
        }
        setTimeout(type,nextLetterDelay)
    }
}