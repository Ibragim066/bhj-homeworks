"use strict";

const editor = document.getElementById('editor');
const clearButton = document.getElementById('clearButton');
editor.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClear);

function handleInput() {
    const value = editor.value;
    localStorage.setItem('editorValue', value);
}

function handleClear() {
    editor.value = '';
    localStorage.removeItem('editorValue');
}

window.addEventListener('load', () => {
    const savedValue = localStorage.getItem('editorValue');
    if (savedValue) {
        editor.value = savedValue;
    }
});

