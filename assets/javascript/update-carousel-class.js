function updateClasses() {
  // Отримуємо всі елементи, яким треба додати однаковий клас
  const elementsGroup = document.querySelectorAll(".jsTwo");
  // Отримуємо окремий елемент, якому треба додати інший клас
  const specialElement = document.querySelector(".jsOne");
  const specialElement2 = document.querySelector(".jsThree");

  // Клас, який треба додати до групи
  const groupClass = "carousel-item";
  // Клас, який треба додати до окремого елемента
  const specialClass = "carousel-inner";

  // Перевіряємо ширину екрану
  const isMobile = window.innerWidth <= 767;

  // Додаємо або видаляємо клас для групи елементів
  elementsGroup.forEach((element) => {
    element.classList.toggle(groupClass, isMobile);
  });

  // Додаємо або видаляємо клас для спеціального елемента
  if (specialElement) {
    specialElement.classList.toggle(specialClass, isMobile);
  }
}

// Виконуємо функцію при завантаженні сторінки та зміні розміру вікна
window.addEventListener("resize", updateClasses);
window.addEventListener("DOMContentLoaded", updateClasses);
