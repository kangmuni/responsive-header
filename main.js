const toggleBtn = document.querySelector('.navbar__toggleBtn');
const navbarContainer = document.querySelector('.navbar__container');
const menu = document.querySelector('.navbar__menu');
toggleBtn.addEventListener('click', () => {
  navbarContainer.classList.toggle('active');
});
