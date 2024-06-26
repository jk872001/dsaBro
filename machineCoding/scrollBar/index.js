let indicator = document.getElementsByClassName("progress-bar")[0]

window.addEventListener("scroll",scroll)

function scroll(){
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop
    let percentage = (scrollTop/scrollHeight) * 100
    
    indicator.style.width = `${percentage}%`
}