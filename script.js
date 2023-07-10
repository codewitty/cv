// Add this JavaScript code in a <script> tag or in an external JavaScript file

// Select all carousel elements
const carousels = document.querySelectorAll('.carousel');

// Loop through each carousel
carousels.forEach(carousel => {
  const carouselContent = carousel.querySelector('.carousel-content');
  const carouselItems = carouselContent.querySelectorAll('p');

  // Calculate the total width of carousel content
  const totalWidth = carouselItems.length * carousel.clientWidth;

  // Set the width of carousel content to accommodate all items
  carouselContent.style.width = `${totalWidth}px`;

  // Clone the carousel items and append them to the end of the carousel
  carouselItems.forEach(item => {
    carouselContent.appendChild(item.cloneNode(true));
  });

  // Start the carousel animation
  let position = 0;
  setInterval(() => {
    position -= carousel.clientWidth;
    carouselContent.style.transform = `translateX(${position}px)`;
    if (Math.abs(position) >= totalWidth) {
      position = 0;
    }
  }, 5000); // Adjust the duration as needed
});

