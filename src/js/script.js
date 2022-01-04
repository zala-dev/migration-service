'use strict';
const navMobileContainer = document.querySelector('.nav-mobile');
const navMobileList = document.querySelector('.nav-mobile-list');
const navMobileLink = document.querySelector('.nav-mobile-link');
const openMenuContainer = document.getElementById('nav-mobile-open-container');
const closeMenuContainer = document.getElementById(
  'nav-mobile-close-container'
);

openMenuContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fas')) {
    navMobileContainer.classList.remove('hidden');
  }
});

closeMenuContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('far')) {
    navMobileContainer.classList.add('hidden');
  }
});

navMobileContainer.addEventListener('click', (e) => {
  const navLink = e.target.closest('#nav-link');
  if (!navLink) return;
  navMobileContainer.classList.add('hidden');
});
