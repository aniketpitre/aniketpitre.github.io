'use strict';

// Function to toggle element class
const toggleClass = (elem, className) => elem.classList.toggle(className);

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => toggleClass(sidebar, "active"));

// Testimonials variables
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

document.querySelectorAll("[data-testimonials-item]").forEach((item) => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    toggleClass(modalContainer, "active");
    toggleClass(overlay, "active");
  });
});
modalCloseBtn.addEventListener("click", () => {
  toggleClass(modalContainer, "active");
  toggleClass(overlay, "active");
});

// Custom select variables
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => toggleClass(select, "active"));
document.querySelectorAll("[data-select-item]").forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    toggleClass(select, "active");
    filterFunc(selectedValue);
  });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = (selectedValue) => {
  filterItems.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);
    filterBtn.forEach((btn) => toggleClass(btn, "active", false));
    toggleClass(btn, "active");
  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]:not([data-page='portfolio'])");


navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    pages.forEach((page, index) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[index].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[index].classList.remove("active");
      }
    });
  });
});
