document.addEventListener("DOMContentLoaded", () => {
  // Module toggle functionality
  const moduleHeaders = document.querySelectorAll(".about_module-header");

  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const module = this.parentElement;

      // Close other open modules before opening this one
      if (!module.classList.contains("active")) {
        document.querySelectorAll(".about_module.active").forEach((openModule) => {
          if (openModule !== module) {
            openModule.classList.remove("active");
          }
        });
      }

      module.classList.toggle("active");
    });
  });

  // Hash button toggle functionality
  const hashButtons = document.querySelectorAll(".about_hash-toggle");

  hashButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent triggering module toggle
      const hashButton = this.parentElement;

      // Close other open hash buttons within the same module before opening this one
      if (!hashButton.classList.contains("active")) {
        const parentModule = hashButton.closest(".about_module");
        parentModule.querySelectorAll(".about_hash-button.active").forEach((openHashButton) => {
          if (openHashButton !== hashButton) {
            openHashButton.classList.remove("active");
          }
        });
      }

      hashButton.classList.toggle("active");
    });
  });
});
