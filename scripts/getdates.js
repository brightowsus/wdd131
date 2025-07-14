// Get current year
const currentYear = new Date().getFullYear();

// Write current year into <span id="currentyear">
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;

// Write last modified date into <p id="lastModified">
document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModified;
