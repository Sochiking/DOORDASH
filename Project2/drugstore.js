document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // The parent element of the header is the accordion item
            const accordionItem = header.parentElement;

            // Toggle the 'active' class on the accordion item
            accordionItem.classList.toggle('active');

            // Optional: Close other open accordion items
            // If you want only one item to be open at a time, uncomment the code below
            /*
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.parentElement.classList.remove('active');
                }
            });
            */
        });
    });
});