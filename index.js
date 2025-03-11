// filepath: c:\Users\becca\Desktop\Projetos\exercícios\Basketball_scoreboard\index.js

let homescore = 0;
let guestscore = 0;
let timer = 3600;

function addHomeScore(number) {
    homescore += number;
    document.getElementById("home-score").textContent = homescore;
}

function addGuestScore(number) {
    guestscore += number;
    document.getElementById("guest-score").textContent = guestscore;
}

function scoreboard() {
    setInterval(() => {
        if (timer === 0) {
            alert("Game Over!");
            return;
        }
        timer--;
        let minutes = Math.floor(timer/60);
        let seconds = timer % 60;
        document.getElementById("timer").textContent = minutes + ":" + seconds;
    }, 1000)
}



