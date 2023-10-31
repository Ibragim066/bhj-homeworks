"use strict";

const editor = document.getElementById('editor');
editor.addEventListener('input', handleInput);

function handleInput() {
    const value = editor.value;
    localStorage.setItem('editorValue', value);
}

window.addEventListener('load', () => {
    const savedValue = localStorage.getItem('editorValue');
    if (savedValue) {
        editor.value = savedValue;
    }
});

