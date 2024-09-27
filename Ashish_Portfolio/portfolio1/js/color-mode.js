// Define DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Load the user's preferred color mode from local storage.
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
  updateTextColor(); // Call to set initial text color
}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// Save the user's preferred color mode to local storage
function saveColorMode() {
  const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
  updateTextColor(); // Update text color on mode change
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}

function updateTextColor() {
    const heroTextElements = document.querySelectorAll("#hero h5, #hero h1, #hero p"); // Select all relevant elements
    heroTextElements.forEach((element) => {
        if (root.classList.contains("dark-mode")) {
            element.classList.remove("light-mode-text");
            element.classList.add("dark-mode-text");
        } else {
            element.classList.remove("dark-mode-text");
            element.classList.add("light-mode-text");
        }
    });
}
