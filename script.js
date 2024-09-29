// Create an event listener for each leader image
document.querySelectorAll('.leader').forEach(img => {
    img.addEventListener('click', function() {
        // Clear any previously added small image
        clearSmallImage();

        // Get the path for the unique image from the data attribute
        const uniqueImgSrc = this.getAttribute('data-unique');

        // Create the new small image
        const smallImg = document.createElement('img');
        smallImg.src = uniqueImgSrc;  // Use the unique image path from data attribute
        smallImg.classList.add('small-img');

        // Append the small image to the clicked .leader
        this.parentElement.appendChild(smallImg);
        smallImg.style.top = this.offsetTop + 'px';  // Correct positioning based on clicked image
        smallImg.style.left = this.offsetLeft + 'px'; // Align with clicked image position
    });
});

// Function to remove any previously inserted small image
function clearSmallImage() {
    document.querySelectorAll('.small-img').forEach(img => img.remove());
}
