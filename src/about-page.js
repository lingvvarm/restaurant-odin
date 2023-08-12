"use strict";

export default function aboutPage(container, button) {
    container.innerHTML = `<div class="about-main-block">
        <div class="about-block">
            <div class="about-header">Our Chef X</div>
            <img src="./img/tonio.jpg" alt="chef" class="chef-img">
            <div class="chef-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper laoreet tristique. Pellentesque et commodo ex. Ut at ligula consectetur, pharetra magna blandit, bibendum leo. Vestibulum tincidunt id sapien quis rhoncus. Etiam ut diam purus. Morbi malesuada sapien quis magna euismod, ac scelerisque turpis malesuada. Vivamus vel pretium diam.
            </div>
        </div>
        <div class="about-block">
            <div class="about-header">Our Xistory</div>
            <img src="./img/crew.jpg" alt="chef" class="chef-img">
            <div class="chef-text">
                Nam semper, arcu id rhoncus euismod, enim elit convallis turpis, nec luctus risus eros non odio. Aliquam hendrerit velit quis metus facilisis pulvinar. Etiam id cursus elit. In egestas porttitor fermentum. Cras vel nisi ut lorem tristique aliquet. Ut rutrum tortor in purus tincidunt, nec dapibus sapien finibus.
            </div>
        </div>
        <div class="about-block">
            <div class="about-header">Contacts</div>
            <div class="contacts">
                <div class="contact">
                    <img src="./img/address.png" alt="map-icon" class="contact-img">
                    <div class="contact-text">Location</div>
                    <div class="contact-subtext">South Lorenzfurt, 45001 Alvera Loaf</div>
                </div>
                <div class="contact">
                    <img src="./img/phone.png" alt="phone-icon" class="contact-img">
                    <div class="contact-text">Phone number</div>
                    <div class="contact-subtext">(251) 334-4525 x663</div>
                </div>
            </div>
        </div>
    </div>`;
    button.classList.add('chosen');
}