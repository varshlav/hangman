//let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var dictionary = ['WINTER', 'SPRINTERS', 'MOBILE', 'APARTMENT','BICYCLE'];


let countdown = 6;
let wordcount = 0;
let score;
if(sessionStorage.getItem('hangmanScore')){
    score = sessionStorage.getItem('hangmanScore');
} else {
    score = 0;
}
score = Number(score);
document.getElementById('score').innerText = "score = "+score;
let rand = Math.floor(Math.random() * 5);

let word = dictionary[rand];
let position = -1;
var eachword, hangmanImage;

window.onload = function () {
    const guessDiv = document.getElementsByClassName("center");

    hangmanImage = document.getElementsByClassName("right");

    for (let i = 0; i < word.length; i++) {
        const newDiv = document.createElement('span');
        newDiv.className = "eachword";
        newDiv.innerHTML = " _ ";
        guessDiv[0].appendChild(newDiv);
    }
    eachword = document.getElementsByClassName("eachword");
};

const alphaSet = new Set();
document.addEventListener('keydown', event => {
    if(!alphaSet.has(event.keyCode) && event.keyCode > 64 && event.keyCode < 91){
        guessword(event.code[3]);
        alphaSet.add(event.keyCode);
        document.getElementById(event.code[3]).disabled = true;
        console.log(event);
    }

});

//eachword[0].innerHTML = "K";
 function guessword(char){
    guessing(char, displayAlert);
 }

function guessing(char, callback) {
    position = -1;
    if (word.indexOf(char, position + 1) > -1) {
        while (word.indexOf(char, position + 1) != -1) {
            score = score + 10;
            wordcount++;
            position = word.indexOf(char, position + 1);
            eachword[position].innerHTML = char;
        }
    } else {
        countdown--;
        score = score - 5;
        if (countdown === 5) {
            //hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/2.jpg')";
            hangmanImage[0].style.backgroundImage = "url('hangman2.png')";
        } else if (countdown === 4) {
            hangmanImage[0].style.backgroundImage = "url('hangman3.png')";
        } else if (countdown === 3) {
            hangmanImage[0].style.backgroundImage = "url('hangman4.png')";
        } else if (countdown === 2) {
            hangmanImage[0].style.backgroundImage = "url('hangman5.png')";
        } else if (countdown === 1) {
            hangmanImage[0].style.backgroundImage = "url('hangman6.png')";
        } else if (countdown === 0) {
            hangmanImage[0].style.backgroundImage = "url('hangman7.png')";
            sessionStorage.setItem('hangmanScore', 0);
            callback(0);
        }
    }
    if (wordcount === word.length) {
        score = score + 50;
        setTimeout(function(){
            showModal();
            let keyboard = document.getElementsByClassName('keyboard');
            keyboard[0].innerHTML = "Congratulations !!!";
            sessionStorage.setItem('hangmanScore', score);
        }, 200);
    }
    document.getElementById('score').innerText = "score = "+score;
}

function displayAlert(cdown){
    if(cdown === 0){
        let keyboard = document.getElementsByClassName('keyboard');
        keyboard[0].innerHTML = "GAME OVER BUDDY";
    }
}

const modal = document.getElementById('modal');
function showModal(){
    modal.style.display = "block";
}


function closeModal(){
    modal.style.display = "none";
}
