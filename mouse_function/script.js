const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("click" , textContent)

function textContent(e){
    let input = prompt("input text you want to change")

    text.innerHTML = input;

    moveContext(e);
}

function moveContext(e){
    let x = e.clientX - box.offsetLeft
    let y = e.clientY - box.offsetTop

    text.style.position = "absolute"

    text.style.left = x +"px"
    text.style.top = y+"px"
}