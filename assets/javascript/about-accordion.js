document.addEventListener("DOMContentLoaded", function () {
  // Get all modules
  const modules = document.querySelectorAll(".about-module");

  // Add click event to module headers
  modules.forEach((module) => {
    const header = module.querySelector(".about-module-header");
    const arrow = module.querySelector(".about-module-arrow");

    header.addEventListener("click", function () {
      // Check if this module is already active
      const isActive = module.classList.contains("about-active");

      // Close all modules
      modules.forEach((m) => {
        m.classList.remove("about-active");
        m.querySelector(".about-module-arrow").classList.remove("about-up");

        // Hide all hash contents in this module
        const hashContents = m.querySelectorAll(".about-hash-content");
        hashContents.forEach((content) => {
          content.classList.remove("about-active");
        });

        // Remove active class from all hash buttons
        const hashButtons = m.querySelectorAll(".about-hash-button");
        hashButtons.forEach((button) => {
          button.classList.remove("about-active");
        });
      });

      // If the clicked module wasn't active, make it active
      if (!isActive) {
        module.classList.add("about-active");
        arrow.classList.add("about-up");
      }
    });
  });

  // Add click event to hash buttons
  const hashButtons = document.querySelectorAll(".about-hash-button");

  hashButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent module toggle

      const targetId = button.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      const parentModule = button.closest(".about-module");

      // Hide all hash contents in this module
      const hashContents = parentModule.querySelectorAll(".about-hash-content");
      hashContents.forEach((content) => {
        content.classList.remove("about-active");
      });

      // Remove active class from all hash buttons in this module
      const moduleHashButtons = parentModule.querySelectorAll(".about-hash-button");
      moduleHashButtons.forEach((btn) => {
        btn.classList.remove("about-active");
      });

      // If the button wasn't already active, show its content
      if (!button.classList.contains("about-active")) {
        button.classList.add("about-active");
        targetContent.classList.add("about-active");
      }
    });
  });
});
