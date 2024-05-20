const regBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const container = document.getElementById('container');

regBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});