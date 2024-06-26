const cursor = document.getElementById("cursor")

window.addEventListener("mousemove",(event)=>{
    cursorTracker(event.pageX,event.pageY)
})

function cursorTracker(pageX,pageY){
    cursor.style.left = pageX + "px"
    cursor.style.top = pageY + "px"
}
