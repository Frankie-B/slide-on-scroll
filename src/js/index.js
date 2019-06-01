// jshint esversion: 6

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
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
      console.log(e);
    }

    window.addEventListener('scroll', checkSlide);