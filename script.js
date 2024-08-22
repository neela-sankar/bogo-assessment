document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.offer-details .price-label');

    labels.forEach(label => {
        label.addEventListener('click', () => {
            // Get the current offer and its size-color div
            const currentOffer = label.closest('.offer');
            const sizeColorDiv = currentOffer.querySelector('.size-color');

            // Remove the 'selected' class from all offers
            document.querySelectorAll('.offer').forEach(offer => {
                offer.classList.remove('selected');
                offer.querySelector('.size-color').style.display = 'none'; // Hide all size-color divs
            });

            // Add the 'selected' class to the clicked offer
            currentOffer.classList.add('selected');

            // Toggle the display of the clicked offer's size-color div
            sizeColorDiv.style.display = sizeColorDiv.style.display === 'block' ? 'none' : 'block';
        });
    });
});
