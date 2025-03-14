document.addEventListener("DOMContentLoaded", function () {
  const triggers = document.querySelectorAll(".tooltip-trigger");

  triggers.forEach((trigger) => {
    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = trigger.getAttribute("data-tooltip");

    // Add custom style to the last tooltip
    if (trigger.getAttribute("data-custom-class") === "true") {
      tooltip.classList.add("custom-tooltip");
    }

    // Add tooltip to DOM
    trigger.appendChild(tooltip);

    // Function to position tooltip
    function positionTooltip() {
      const triggerRect = trigger.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Reset classes
      tooltip.classList.remove("top", "bottom", "left", "right");

      // Calculate available space in each direction
      const spaceTop = triggerRect.top;
      const spaceBottom = windowHeight - triggerRect.bottom;
      const spaceLeft = triggerRect.left;
      const spaceRight = windowWidth - triggerRect.right;

      // Determine best position
      let bestPosition = "top"; // Default
      let maxSpace = spaceTop;

      if (spaceBottom > maxSpace) {
        bestPosition = "bottom";
        maxSpace = spaceBottom;
      }

      if (spaceLeft > maxSpace) {
        bestPosition = "left";
        maxSpace = spaceLeft;
      }

      if (spaceRight > maxSpace) {
        bestPosition = "right";
        maxSpace = spaceRight;
      }

      // Override for demo purposes
      if (trigger.getAttribute("data-placement") === "top")
        bestPosition = "top";
      if (trigger.getAttribute("data-placement") === "bottom")
        bestPosition = "bottom";
      if (trigger.getAttribute("data-placement") === "left")
        bestPosition = "left";
      if (trigger.getAttribute("data-placement") === "right")
        bestPosition = "right";

      // Add appropriate class
      tooltip.classList.add(bestPosition);
    }

    // Event listeners
    trigger.addEventListener("mouseenter", function () {
      positionTooltip();
      tooltip.classList.add("active");
    });

    trigger.addEventListener("mouseleave", function () {
      tooltip.classList.remove("active");
    });

    // Touch events for mobile
    trigger.addEventListener("touchstart", function (e) {
      e.preventDefault();
      positionTooltip();
      tooltip.classList.add("active");
    });

    document.addEventListener("touchstart", function (e) {
      if (!trigger.contains(e.target)) {
        tooltip.classList.remove("active");
      }
    });

    // Reposition on window resize
    window.addEventListener("resize", function () {
      if (tooltip.classList.contains("active")) {
        positionTooltip();
      }
    });
  });
});
