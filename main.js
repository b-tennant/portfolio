const toggleButton = document.getElementById('Btn')
console.log(toggleButton);
const navbarLinks = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
console.log(navbarLinks)
    navbarLinks.classList.toggle('active')
});