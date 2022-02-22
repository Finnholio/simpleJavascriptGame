var character = document.getElementById("character")
console.log(character)
var block = document.getElementById("block")

function jump(){
    if(character.classList != "animate")
    {
      haracter.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
    }
    console.log("hELLO WORLD")
}

