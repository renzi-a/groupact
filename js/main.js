document.getElementById("title").innerText = "Welcome";

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}
