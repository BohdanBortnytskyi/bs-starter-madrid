// Importing JavaScript

//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "node_modules/popper.js/dist/popper.min.js";

// import "bootstrap/js/dist/util/index";
// import "bootstrap/js/dist/modal.js";


const collapseElement = document.getElementById('collapseExample');
const btnElement = document.querySelector('[data-bs-toggle="collapse"]');
const arrowIcon = document.querySelector('.arrow-icon');
const btnText = document.querySelector('.btn-text');

collapseElement.addEventListener('show.bs.collapse', function () {
  arrowIcon.classList.add('rotate-up');
  btnText.textContent = 'Mostrar menos';
});

collapseElement.addEventListener('hide.bs.collapse', function () {
  arrowIcon.classList.remove('rotate-up');
  btnText.textContent = 'Leer más';
});



const videos = document.querySelectorAll('.video')
const overlay = document.querySelectorAll('.video-overlay');

videos.forEach(video => {
  video.addEventListener('mouseout', () => {
    video.pause(); // Поставить видео на паузу при уходе мыши
  });
  video.addEventListener('mouseover', () => {
    video.play();
    video.currentTime = 0;
    overlay.style.display = 'none';

  });
});


const outerBlock = document.querySelector('.page-business_solutions__header');
const innerElement = document.querySelector('.page-business_solutions__header-text');

document.addEventListener('scroll', () => {
  const blockRect = outerBlock.getBoundingClientRect();
  const textHeight = innerElement.getBoundingClientRect().height;
  const windowHeight = window.innerHeight;

  if (blockRect.top + blockRect.height / 2 <= windowHeight) {
    innerElement.style.top = blockRect.height - textHeight + "px";
  } else {
    innerElement.style.top = '0';
  }
});







const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 'auto',
  touchEventsTarget: 'container',
  breakpoints: {
    576: {
      direction: 'vertical',
      loop: true,
      spaceBetween: 30
    },
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
      }
    },
    992: {
      loop:true,
      direction: 'horizontal',
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button', 
      }
    },
    1200: {
      loop:true,
      direction: 'horizontal',
      slidesPerView: 4,
      slidesPerGroup: 4,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button', 
      }
    }
  }
});

const rotateButtons = document.querySelectorAll(".page-participants_slider__swiper-btn");

rotateButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("rotated")) {
    
      button.classList.add("rotated");
    } else {
  
      button.classList.remove("rotated");
    }
  });
});

const choiceArray = document.querySelectorAll(".page-events__accordion_item")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand")
            element.classList.add('small')
        })
        card.classList.remove("small")
        card.classList.add('expand')
    });
}); 