"use strict";

const pollAnswersElement = document.getElementById('poll__answers');
const pollTitleElement = document.getElementById('poll__title');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => response.json())
    .then(data => {
        const pollTitle = data.data.title;
        const answers = data.data.answers;

        pollTitleElement.innerText = pollTitle;

        answers.forEach(answer => {
            const answerBtn = document.createElement('button');
            answerBtn.classList.add('poll__answer');
            answerBtn.innerText = answer;
            pollAnswersElement.appendChild(answerBtn);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке опроса:', error);
    });


pollAnswersElement.addEventListener('click', event => {
    if (event.target.classList.contains('poll__answer')) {
        confirm('Спасибо, ваш голос засчитан!')
    }
});

