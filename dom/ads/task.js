"use strict";

const rotator = [...document.querySelectorAll('.rotator__case')];
let activeNum = 1;

function toggleRotator() {
    rotator.forEach((item, index) => {
        if (index === activeNum) {
            item.classList.add("rotator__case_active");
            item.style.color = item.dataset.color;
            const speed = +item.dataset.speed;
            clearInterval(intervalId);
            intervalId = setInterval(toggleRotator, speed);
        } else {
            item.classList.remove("rotator__case_active");
        }
    });

    activeNum++;

    if (activeNum === rotator.length) {
        activeNum = 0;
    }
}

let intervalId = setInterval(toggleRotator, 1000);