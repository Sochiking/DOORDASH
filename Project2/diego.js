
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Check if the current item is already active
            const isActive = item.classList.contains('active');

            // Optional: Close all other open items for an accordion effect
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the clicked item was not active, open it.
            // If it was active, it will now be closed because we removed the class above.
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});