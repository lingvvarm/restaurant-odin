"use strict";

export default function mainPage(container, button) {
    container.innerHTML = `<div class="header">The X cafe</div>
        <div class="description">Brand new trendy cafe inspired by X social media.</div>
        <div class="food-container">
            <div class="food-header">Taste our amazing X's</div>
            <div class="food-box">
                <div class="food-card">
                    <img src="./img/pizza.png" alt="pizza" class="card-img">
                    <p class="card-text">XPizza</p>
                </div>
                <div class="food-card">
                    <img src="./img/snacks.png" alt="snacks" class="card-img">
                    <p class="card-text">XSnacks</p>
                </div>
                <div class="food-card">
                    <img src="./img/cake.png" alt="desserts" class="card-img">
                    <p class="card-text">XDesserts</p>
                </div>
            </div>
        </div>`
    button.classList.add('chosen');
}
