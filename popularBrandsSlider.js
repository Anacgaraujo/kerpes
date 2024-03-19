let scrollAmount = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.aboutUS_slider');
  const slideWidth = slider.querySelector('.popular_brand_img').clientWidth;
  
  // Adjust the scrollAmount per click to your liking
  const perClick = slideWidth * 2; 
  
  if (direction === 1) {
    scrollAmount += perClick;
  } else {
    scrollAmount -= perClick;
  }

  slider.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}
