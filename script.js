'use strict';
const mainContainer = document.querySelector('.main_container');
const sideNav = document.querySelector('.sidenav');
const dashboard = document.querySelector('.right_section');
const menuBtn = document.querySelector('.btn');

const Appbar = document.querySelector('.topbar_wrapper');

function closeMenu(e) {
  console.log(e);
  sideNav.classList.remove("sidebar_deactive");
}

function observerCb(payload) {
  console.log(payload[0]
  );
  // console.log(payload[0].isIntersecting);
  // if (payload[0].isIntersecting === false) {
  //   // closeMenu();
  //   handleMenu();
  //   observer.unobserve(Appbar);
  // } else {
  //   // handleMenu();
  //   return;
  // }
}
const observer = new IntersectionObserver(observerCb, {
  root: Appbar,
  threshold: 1,
});
observer.observe(Appbar);
console.log(observer);


// create a function for show/hide menu
// const handleMenu = (e) => {
//   // console.dir(e.target);
//   // console.log("clicked");
//   sideNav.classList.toggle("sidebar_deactive");
//   // sideNav.style.display = "none";
//   dashboard.style.width = "100vw";

// };

// version:2
const handleMenu = (e) => {
  // console.dir(e.target);
  console.log("clicked");
  sideNav.classList.toggle("sidebar_active");
  // sideNav.style.display = "none";

};

menuBtn.addEventListener('click', handleMenu);