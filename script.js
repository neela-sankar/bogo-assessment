document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.offer-details .price-label');

    labels.forEach(label => {
        label.addEventListener('click', () => {
            
            const currentOffer = label.closest('.offer');
            const sizeColorDiv = currentOffer.querySelector('.size-color');

            
            document.querySelectorAll('.offer').forEach(offer => {
                offer.classList.remove('selected');
                offer.querySelector('.size-color').style.display = 'none'; // Hide all size-color divs
            });

            
            currentOffer.classList.add('selected');

            // Toggle the display of the clicked offer's size-color div
            sizeColorDiv.style.display = sizeColorDiv.style.display === 'block' ? 'none' : 'block';
        });
    });
});
