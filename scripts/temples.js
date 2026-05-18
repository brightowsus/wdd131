// Footer Year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Last Modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.textContent = "X";
  } else {
    menuButton.textContent = "☰";
  }
});