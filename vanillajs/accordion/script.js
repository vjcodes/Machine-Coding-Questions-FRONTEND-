// script.js

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                const allContents = document.querySelectorAll('.accordion-content');
                allContents.forEach(c => c.style.display = 'none');

                content.style.display = "block";
            }
        });
    });
});
