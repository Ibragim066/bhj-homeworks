"use strict";

const fontSize = [...document.querySelectorAll('.font-size')];
const book = document.getElementById('book');
const textColor = [...document.querySelector('.book__control_color').children];
const bgColor = [...document.querySelector('.book__control_background').children];



fontSize.forEach((item) => {
    item.addEventListener('click', (evt) => {

        const activeLetters = fontSize.find(item => item.className.includes("font-size_active"));
        evt.preventDefault();

        activeLetters.classList.remove('font-size_active');
        item.classList.add('font-size_active');

        if (item.className.includes('font-size_small')) {
            book.classList.remove("book_fs-big")
            book.classList.add("book_fs-small")
        } else if (item.className.includes('font-size_big')) {
            book.classList.remove("book_fs-small")
            book.classList.add("book_fs-big")
        } else {
            book.className = "";
        }
    });
});

textColor.forEach(list => {
    if (list.classList.contains('color')) {
        list.onclick = function () {
            book.style.color = this.dataset.textColor;
            this.parentElement.querySelector('.color_active')
            this.classList.remove('color_active');
            this.classList.add('color_active');
            return false;
        }
    }
})

bgColor.forEach(elem => {
    if (elem.classList.contains('color')) {
        elem.onclick = function () {
            book.style.background = this.dataset.bgColor;
            this.parentElement.querySelector('.color_active')
            this.classList.remove('color_active');
            this.classList.add('color_active');
            return false;
        }
    }
})