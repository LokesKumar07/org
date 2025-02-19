const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".sign-up form");
    const loginForm = document.querySelector(".sign-in form");
    const registerButton = document.getElementById("register");
    const loginButton = document.getElementById("login");
    const container = document.getElementById("container");

    registerButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    loginButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    // Handle Registration
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const username = registerForm.elements[0].value;
        const fullName = registerForm.elements[1].value;
        const email = registerForm.elements[2].value;
        const password = registerForm.elements[3].value;
        const vehicleNumber = registerForm.elements[4].value;
        const phoneNumber = registerForm.elements[5].value;
        
        if (localStorage.getItem(email)) {
            alert("Account already exists with this email. Please sign in.");
            return;
        }
        
        const userData = {
            username,
            fullName,
            email,
            password,
            vehicleNumber,
            phoneNumber
        };
        
        localStorage.setItem(email, JSON.stringify(userData));
        alert("Account created successfully! You can now sign in.");
        container.classList.remove("right-panel-active");
        registerForm.reset();
    });

    // Handle Login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = loginForm.elements[0].value;
        const password = loginForm.elements[1].value;
        
        const userData = JSON.parse(localStorage.getItem(email));
        
        if (!userData) {
            alert("No account found with this email. Please sign up.");
            return;
        }
        
        if (userData.password !== password) {
            alert("Incorrect password. Please try again.");
            return;
        }
        
        localStorage.setItem("currentUser", email);
        window.location.href = "dash.html";
    });
});
