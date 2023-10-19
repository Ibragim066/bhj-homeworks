"use strict";

const productsContainer = document.querySelector(".products");
const productsCart = document.querySelector(".cart__products");
const cart = document.querySelector(".cart");

cart.classList.add("display-none");

productsContainer.addEventListener("click", function (event) {
    const productId = event.target.closest(".product").dataset.id;
    if (event.target.classList.contains("product__quantity-control")) {
        quantityControl(productId, event.target)
    } else if (event.target.classList.contains("product__add")) {
        addToCart(productId);
    }
})

productsCart.addEventListener("click", function (event) {
    const productId = event.target.closest(".cart__product").dataset.id;
    if (event.target.classList.contains("cart__product-remove")) {
        deleteCarts(productId);
    }
})

function quantityControl(id, target) {
    const element = productsContainer.querySelector(`[data-id="${id}"]`);
    const counter = element.querySelector(".product__quantity-value");
    if ((target.classList.contains("product__quantity-control_dec")) && (counter.innerText >= 2)) {
        counter.innerText--;
    } else if (target.classList.contains("product__quantity-control_inc")) {
        counter.innerText++;
    }
}

function addToCart(id) {
    const item = productsContainer.querySelector(`[data-id="${id}"]`);
    const addValue = Number(item.querySelector(".product__quantity-value").innerText);
    if (productsCart.querySelector(`[data-id="${id}"]`)) {
        const currentValue = Number(productsCart.querySelector(`[data-id="${id}"] .cart__product-count`).innerText);
        productsCart.querySelector(`[data-id="${id}"] .cart__product-count`).innerText = currentValue + addValue;
    } else {
        const imgSrc = item.querySelector(".product__image").getAttribute("src");
        const newElement = document.createElement('div');
        newElement.classList.add("cart__product");
        newElement.dataset.id = id;
        newElement.innerHTML = `<img class="cart__product-image" alt="" src="${imgSrc}">
                                <div class="cart__product-count">${addValue}</div>
                                <div class="cart__product-remove">X</div>
                                </div>`;
        productsCart.append(newElement);
    }
    item.querySelector(".product__quantity-value").innerText = 1;
    cartIsEmpty();
}

function cartIsEmpty() {
    if (productsCart.children.length > 0) {
        cart.classList.remove("display-none")
    } else {
        cart.classList.add("display-none")
    }
}

function deleteCarts(id) {
    const item = productsCart.querySelector(`[data-id="${id}"]`);
    item.remove();
    cartIsEmpty();
}