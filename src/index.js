"use strict";

import './style.css';
import mainPage from './main-page'
import menuPage from './menu-page'
import aboutPage from './about-page'


function bindButtons() {
    const main_container = document.querySelector('#content');
    const home_btn = document.querySelector('.home-btn');
    const menu_btn = document.querySelector('.menu-btn');
    const about_btn = document.querySelector('.about-btn');

    home_btn.addEventListener('click', () => {
        menu_btn.classList.remove('chosen');
        about_btn.classList.remove('chosen');
        mainPage(main_container, home_btn);
    });
    menu_btn.addEventListener('click', () => {
        home_btn.classList.remove('chosen');
        about_btn.classList.remove('chosen');
        menuPage(main_container, menu_btn);
    });
    about_btn.addEventListener('click', () => {
        home_btn.classList.remove('chosen');
        menu_btn.classList.remove('chosen');
        aboutPage(main_container, about_btn);
    });

    mainPage(main_container, home_btn);
}

bindButtons();
