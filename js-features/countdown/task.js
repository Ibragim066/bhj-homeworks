"use strict";

const timer = document.getElementById("timer")

let seconds = parseInt(timer.innerText)

function simpleTimer(time) {
    const seconds = time % 60
    const minutes = Math.floor((time % 3600) / 60)
    const hours = Math.floor(time / 3600)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

function improvedTimer() {
    timer.innerText = simpleTimer(seconds)

    if (seconds > 0) {
        seconds--
    } else {
        clearInterval(timerInterval)
        alert("Вы победили в конкурсе!")
        window.location.href = "https://static8.tgstat.ru/channels/_0/e1/e1a5d4a8c986954fc37348ec807dcd3b.jpg"
    }
}

const timerInterval = setInterval(improvedTimer, 1000)