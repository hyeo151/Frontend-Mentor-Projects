const submitButton = document.querySelector('.submit');
const ratingForm = document.getElementById('ratingForm');
const ratingFormContainer = document.getElementById('ratingFormContainer');
const thankYouContainer = document.getElementById('thankYouContainer');
const ratingButtons = document.querySelectorAll(".buttons button");
const ratingSpan = document.querySelector(".selection-wrapper p span");

ratingButtons.forEach(button => {
    button.addEventListener("click",handleClick);
});

function handleClick(e) {
    e.preventDefault();
    ratingButtons.forEach(button => {
        button.classList.remove("selected");
    });
    e.srcElement.classList.add("selected");
}


submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Find the selected button
    const selectedButton = document.querySelector('.buttons button.selected');

    if (selectedButton === null) {
        return;
    }

    const selectedValue = selectedButton.dataset.rating;

    // Display the selected value in the "Thank You" container
    ratingSpan.textContent = selectedValue;

    // Hide the rating form and show the "Thank You" component
    ratingFormContainer.style.display = 'none';
    thankYouContainer.style.display = 'flex';
});