"use strict";

export default function menuPage(container, button) {
    console.log("menu");
    container.innerHTML = ` <div class="menu-header">Choose your own X</div>
        <div class="menu-items">
            <div class="item">
                <img src="./img/pizza1.png" alt="pizza1" class="item-img">
                <div class="item-text">X Pizza</div>
                <div class="item-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper odio a placerat convallis.</div>
            </div>
            <div class="item">
                <img src="./img/pizza2.png" alt="pizza2" class="item-img">
                <div class="item-text">XX Pizza</div>
                <div class="item-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper odio a placerat convallis.</div>
            </div>
            <div class="item">
                <img src="./img/pizza3.png" alt="pizza3" class="item-img">
                <div class="item-text">XXX Pizza &#128563;</div>
                <div class="item-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper odio a placerat convallis.</div>
            </div>
            <div class="item">
                <img src="./img/fries.png" alt="fries" class="item-img">
                <div class="item-text">French fries (no X)</div>
                <div class="item-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper odio a placerat convallis.</div>
            </div>
            <div class="item">
                <img src="./img/brownie.png" alt="brownie" class="item-img">
                <div class="item-text">Just X, why not?</div>
                <div class="item-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper odio a placerat convallis.</div>
            </div>
        </div>`
    button.classList.add('chosen');
}