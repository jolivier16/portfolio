const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');
burger.addEventListener('click', () => {
navBar.classList.toggle('open');
  });

const copyrightYear = document.querySelector('.footer-copyright p');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = `© ${currentYear} James Olivier, All rights reserved.`;