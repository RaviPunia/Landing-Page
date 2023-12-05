/*------------- Form JS ---------------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbzL4QYjgAOWS7QKSpMiRVS24WTfcn7J3XrmO7hLweUbHc4gmMtQH_p-L0nxL4eukJT91A/exec'
const forms = document.querySelectorAll('[name="submit-to-google-sheet"]');
const thankYouMessage = document.getElementById("thankYouMessage");
const thankYouMessageFooter = document.getElementById("thankYouMessageFooter");

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        thankYouMessage.innerHTML = "Thank You!";
        thankYouMessageFooter.innerHTML = "Thank You!";
        setTimeout(function(){
          thankYouMessage.innerHTML = "";
          thankYouMessageFooter.innerHTML = "";
        }, 3000);
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