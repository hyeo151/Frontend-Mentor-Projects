const submitButton = document.querySelector("button");
const form = document.querySelector("form");
const confirm = document.querySelector(".confirm");

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent page reload on form submission

  // Hide the rating form and show the "Thank You" component
  form.style.display = "none";
  confirm.style.display = "flex";
});
