"use strict"

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;

let getHole = index => document.getElementById(`hole${index}`);

for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);

    hole.onclick = () => {
        if (hole.classList.contains("hole_has-mole")) {
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead === 10) {
            alert("Победа! Вы убили всех кротов!");
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }

        if (counterLost === 5) {
            alert("Вы проиграли! Кроты убежали!");
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }
    }
}