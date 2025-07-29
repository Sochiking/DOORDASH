const toggleButton = document.getElementById("toggleButton");
const toggleText = toggleButton.querySelector(".toggle-text");
const toggleIcon = toggleButton.querySelector(".toggle-icon");
const moreItems = document.querySelectorAll(".more");

let expanded = false;

toggleButton.addEventListener("click", () => {
  expanded = !expanded;
  moreItems.forEach((item) => {
    item.style.display = expanded ? "list-item" : "none";
  });
  toggleText.textContent = expanded ? "See less" : "See more";
  toggleIcon.innerHTML = expanded ? "&#9650;" : "&#9660;"; // up / down arrows
});

// Initial: hide extras
moreItems.forEach((item) => {
  item.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all the elements with the class 'faq-question'
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Loop through each question button
    faqQuestions.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', () => {
            // Find the parent '.faq-item' element of the clicked button
            const faqItem = button.parentElement;

            // Toggle the 'active' class on the parent element.
            // The CSS handles the rest: rotating the chevron and showing/hiding the answer panel.
            faqItem.classList.toggle('active');
        });
    });
});

