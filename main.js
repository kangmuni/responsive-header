const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menuAndIcon = document.querySelector(".navbar__menuAndIcon");
toggleBtn.addEventListener("click", () => {
    menuAndIcon.classList.toggle("active");
});