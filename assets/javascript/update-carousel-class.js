function updateClasses() {
  // Отримуємо всі елементи, яким треба додати однаковий клас
  const elementsGroup = document.querySelectorAll(".jsTwo");
  // Отримуємо окремий елемент, якому треба додати інший клас
  const specialElement = document.querySelector(".jsOne");
  // Отримуємо окремий елемент, якому треба додати інший клас
  const specialElement2 = document.querySelector(".asd");

  // Клас, який треба додати до групи
  const groupClass = "carousel-item";
  // Клас, який треба додати до окремого елемента
  const specialClass = "carousel-inner";
  // Клас, який треба додати до окремого елемента
  const specialClass2 = "dsa";

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
  // Додаємо або видаляємо клас для спеціального елемента
  if (specialElement2) {
    specialElement2.classList.toggle(specialClass2, isMobile);
  }
}

// Виконуємо функцію при завантаженні сторінки та зміні розміру вікна
window.addEventListener("resize", updateClasses);
window.addEventListener("DOMContentLoaded", updateClasses);
