"use strict";

const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

const modalClosedCookie = getCookie('modalClosed');
if (!modalClosedCookie) {
    modal.classList.add('modal_active');

    closeButton.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', true);
    });
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.slice(name.length + 1));
        }
    }
    return undefined;
}

function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}`;
}

