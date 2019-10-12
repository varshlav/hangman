let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var dictionary = ['WINTER', 'SPRINTERS', 'MOBILE', 'APARTMENT','BICYCLE'];


let countdown = 6;
let wordcount = 0;
let score = 0;

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
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/2.jpg')";
        } else if (countdown === 4) {
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/5.jpg')";
        } else if (countdown === 3) {
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/6.jpg')";
        } else if (countdown === 2) {
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/8.jpg')";
        } else if (countdown === 1) {
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/9.jpg')";
        } else if (countdown === 0) {
            hangmanImage[0].style.backgroundImage = "url('https://www.oligalma.com/downloads/images/hangman/hangman/10.jpg')";
            callback(0);
        }
    }
    if (wordcount === word.length) {
        score = score + 50;
        setTimeout(function(){
            alert("You won this Game");
            let keyboard = document.getElementsByClassName('keyboard');
            keyboard[0].innerHTML = "Congratulations !!!";
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








