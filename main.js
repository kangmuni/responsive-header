const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menuAndIcon = document.querySelector('.navbar__menuAndIcon');
const menu = document.querySelector('.menu');
toggleBtn.addEventListener('click', () => {
  menuAndIcon.classList.toggle('active');
  menu.classList.toggle('active');
});
