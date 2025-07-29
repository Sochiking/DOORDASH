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

