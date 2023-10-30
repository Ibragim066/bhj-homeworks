"use strict";

const progress = document.getElementById('progress');
const form = document.getElementById('form');
const send = document.getElementById('send');

send.addEventListener('click', function (evt) {
    evt.preventDefault();

    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = (evt) => {
        progress.value = evt.loaded / evt.total;
    }

    xhr.send(data);
})





