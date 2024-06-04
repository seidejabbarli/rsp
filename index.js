let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let winner = document.querySelector(".winner")
let comp = document.querySelector(".comp")
let choices = ["r","s","p"];
let index = Math.floor(Math.random()*choices.length);
let compChoices = choices[index];
// let usrChoice = prompt("click r for rock, p for paper, s for scissors");

rock.onclick = function(){
    if(compChoices == "r"){
        comp.classList.add("rock");
        winner.innerText = `nobody(`
    } else if( compChoices == "p"){
        comp.classList.add("paper");
        winner.innerText = `comp`
    } else if( compChoices == "s"){
        comp.classList.add("paper");
        winner.innerText = `user`
    }
}

paper.onclick = function(){
    if( compChoices == "p"){
        comp.classList.add("paper");
        winner.innerText = `nobody(`
    } else if(compChoices == "r"){
        comp.classList.add("rock");
        winner.innerText = `user`
    } else if(compChoices == "s"){
        comp.classList.add("scissors");
        winner.innerText = `comp`
    }
}

scissors.onclick = function(){
    if(compChoices == "s"){
        comp.classList.add("scissors");
        winner.innerText = `nobody(`
    } else if( compChoices == "r"){
        comp.classList.add("rock");
        winner.innerText = `comp`
    } else if( compChoices == "p"){
        comp.classList.add("paper");
        winner.innerText = `user`
    }
}

