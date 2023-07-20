'use strict';

const sideNav = document.querySelector('.sidenav');
const dashboard = document.querySelector('.right_section');
const menuBtn = document.querySelector('.btn');

// create a function for show/hide menu
const handleMenu = (e) => {
  // console.dir(e.target);
  // console.log("clicked");
  sideNav.classList.toggle("sidebar_deactive");
  // sideNav.style.display = "none";
  dashboard.style.width = "100vw";
};


menuBtn.addEventListener('click', handleMenu);