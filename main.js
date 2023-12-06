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



let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// Function to set or get the end date
function getOrSetEndDate() {
    // Check if the end date is stored in localStorage
    let storedEndDate = localStorage.getItem('endDate');
    if (storedEndDate) {
        return new Date(storedEndDate);
    } else {
        // If not, set a new end date 24 hours from now and store it
        let endDate = new Date();
        endDate.setHours(endDate.getHours() + 24);
        localStorage.setItem('endDate', endDate);
        return endDate;
    }
}

let endDate = getOrSetEndDate();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;

    // Time calculation for hours, minutes, and seconds
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with respective IDs
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    // If the countdown is over, reset it
    if(distance < 0){
        endDate = new Date();
        endDate.setHours(endDate.getHours() + 24);
        localStorage.setItem('endDate', endDate);
    }
});

