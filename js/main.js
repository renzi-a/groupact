
// Buggy main.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("title").innerText = "Welcome";
    document.getElementById("menuBtn").addEventListener("click", toggleMenu);
});


function toggleMenu() {
    const button = document.querySelector('button');
    if (button.textContent === 'Toggle Menu') {
        button.textContent = 'Menu Toggled';
    } else {
        button.textContent = 'Toggle Menu';
    }
}
