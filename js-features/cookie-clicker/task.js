"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");

let startTime = Date.now();
let clickSpeed = 0;

cookie.onclick = function () {
    parseInt(clickerCounter.textContent++);
    if (clickerCounter.textContent % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 180;
    }

    let endTime = Date.now();
    const timeInSeconds = (endTime - startTime) / 1000;
    clickSpeed = 1 / timeInSeconds;
    startTime = endTime;
    clickerSpeed.textContent = clickSpeed.toFixed(2);
}