    const keyd = document.getElementById("keyd")

    keyd.addEventListener("keydown" , (e)=>{
        if(e.key === "ArrowDown"){
            alert("you pressed the down key ")

            keyd.parentElement.parentElement.style.backgroundColor = keyd.value
        }
    })

        keyU.addEventListener("keydown" , (e)=>{
        if(e.key === "ArrowUp"){
            alert("you pressed the Up key ")

            keyU.parentElement.parentElement.style.backgroundColor = keyU.value
        }
    })