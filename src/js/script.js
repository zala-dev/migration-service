'use strict';

const openMenuContainer = document.getElementById('nav-mobile-open-container');
const closeMenuContainer = document.getElementById(
  'nav-mobile-close-container'
);

openMenuContainer.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('fas')) {
    document.querySelector('.nav-mobile').classList.remove('hidden');
  }
});

closeMenuContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('far')) {
    document.querySelector('.nav-mobile').classList.add('hidden');
  }
});
