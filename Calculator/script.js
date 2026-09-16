const first = document.getElementById("gg")
const second = document.getElementById("gh")
const click = document.getElementById("Click")
const symbol = document.getElementById("cc")

click.addEventListener('click',(e)=>{
    if(symbol.value === "+" ){
        alert(Number(first.value) + Number(second.value))
    }
    else if(symbol.value === "-"){
        alert(Number(first.value) + Number(second.value))
    }
    else if(symbol.value === "*"){
        alert(Number(first.value) * Number(second.value))
    }
    else if(symbol.value === "/"){
        alert(Number(first.value) / Number(second.value))
    }
})