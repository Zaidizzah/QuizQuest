// Debounce function
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

// Add click event listeners to options
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", function () {
    // Highlight the clicked option
    options.forEach((opt) => (opt.style.transform = "scale(1)"));
    this.style.transform = "scale(0.9)";

    // If the correct answer (2) is clicked
    if (this.textContent === "2") {
      // Animate enemy taking damage
      const enemyChar = document.querySelector(".enemy-character");
      enemyChar.style.transition = "transform 0.2s";
      enemyChar.style.transform = "translateX(50%) scale(0.9)";
      setTimeout(() => {
        enemyChar.style.transform = "translateX(50%) scale(1)";
      }, 200);
    }
  });
});
