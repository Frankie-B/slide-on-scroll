// jshint esversion: 6

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Select all the images that will be listened on
const sliderImages = document.querySelectorAll('.slide-in');

// The below function will run every time the user scrolls on the page
function checkSlide(e) {
  // Loop over every single image and determine when each image needs to be shown

  // Half-way through the image
  sliderImages.forEach(sliderImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2; // Check how much of the window has been scrolled.
    // Bottom of the image.
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    // Will add and remove the class active from the images.
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
