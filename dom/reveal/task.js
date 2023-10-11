"use strict";

let reveal = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    reveal.forEach((el) => {
        const height = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        if (top < height) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    })
});