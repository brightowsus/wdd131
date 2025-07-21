
// Footer Year & Last Modified Date
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const modifiedP = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modifiedP) {
    modifiedP.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Hamburger Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.querySelector("nav ul");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      // Toggle icon between ☰ and ✕
      menuBtn.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
    });
  }
});
