let input = document.querySelector("body");

let boom = new Audio("boom.wav");
let clap = new Audio("clap.wav");
let hihat = new Audio("hihat.wav");
let kick = new Audio("kick.wav");
let openhat = new Audio("openhat.wav");
let ride = new Audio("ride.wav");
let snare = new Audio("snare.wav");
let tink = new Audio("tink.wav");
let tom = new Audio("tom.wav");

input.addEventListener('keypress', (e) => {
    if (e.key === "q" || e.key === "Q") {
        boom.play();
    } else if (e.key === "w" || e.key === "W") {
        clap.play();
    } else if (e.key === "e" || e.key === "E") {
        hihat.play();
    } else if (e.key === "r" || e.key === "R") {
        kick.play();
    } else if (e.key === "t" || e.key === "T") {
        openhat.play();
    } else if (e.key === "y" || e.key === "Y") {
        ride.play();
    } else if (e.key === "u" || e.key === "U") {
        snare.play();
    } else if (e.key === "i" || e.key === "I") {
        tink.play();
    } else if (e.key === "o" || e.key === "O") {
        tom.play();
    }
});