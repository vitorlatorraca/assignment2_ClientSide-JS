document.addEventListener('DOMContentLoaded', function () {
    const featured = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Update the featured image and caption
            featured.src = this.dataset.large;
            featured.alt = this.alt;
            caption.textContent = this.dataset.caption;

            // Update the active class for the thumbnails
            thumbnails.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the first thumbnail as active initially
    thumbnails[0].classList.add('active');
});
