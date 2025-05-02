const signInMenu = document.getElementById("sign-in-dropdown");
const accountButton = document.querySelector(".sign-in-btn");

function toggleAccountMenu() {
    const rect = accountButton.getBoundingClientRect();

    // Position the menu just below the button
    signInMenu.style.position = 'absolute';
    signInMenu.style.left = (rect.left-30) + "px";
    signInMenu.style.top = (rect.bottom + window.scrollY) + "px";

    // Toggle visibility using a CSS class
    signInMenu.classList.toggle("visible");
}

accountButton.addEventListener('click', toggleAccountMenu);
