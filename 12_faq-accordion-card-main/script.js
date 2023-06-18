document.querySelectorAll(".faq-card__question").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("faq-card__active");
    const dropdown = this.querySelector(".faq-card__answer");
    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null;
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + 15 + "px";
    }
    const dropdownArrow = this.querySelector(".faq-card__arrow-img");
    dropdownArrow.classList.toggle("faq-card__arrow-img_active");
  });
});

// const collapsible_2 = document.querySelectorAll(".accordion-heading");
// collapsible_2.forEach((col) => {
//   col.addEventListener("click", function () {
//     const dropdown = this.nextElementSibling;
//     if (dropdown.style.maxHeight) {
//       dropdown.style.maxHeight = null;
//     } else {
//       dropdown.style.maxHeight = dropdown.scrollHeight + 15 + "px";
//     }

//     const dropdownArrow = this.querySelector(".accordion-arrow img");
//     dropdownArrow.classList.toggle("active");
//   });
// });
