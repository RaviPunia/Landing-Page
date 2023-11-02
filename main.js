/*------------- Form JS ---------------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnwwRhliv8FRZsjm5oNWNGzqgBvc7NeInSW7-fFXqtmC56CM_QVDh3pIbKgEbsFBeP/exec'
const forms = document.querySelectorAll('[name="submit-to-google-sheet"]');

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
});



/*------------- Swiper JS ---------------*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});