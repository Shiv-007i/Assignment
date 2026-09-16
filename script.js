let score = 0;

document.getElementById("sumbitQuiz").addEventListener("click", function(){
    if(document.getElementById("correct1").checked){
        score++;
    }
     if(document.getElementById("correct2").checked){
        score++;
    }
     if(document.getElementById("correct3").checked){
        score++;
    }
     if(document.getElementById("correct4").checked){
        score++;
    }
     if(document.getElementById("correct5").checked){
        score++;
    }
    localStorage.setItem("score", score);

    window.location.href = "output.html";
})