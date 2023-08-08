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
// import "bootstrap/js/dist/popover";


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

const video = document.getElementById('video');
const overlay = document.querySelector('.video-overlay');

overlay.addEventListener('mouseenter', () => {
  overlay.style.display = 'none';
  video.play();
});

video.addEventListener('mouseout', () => {
  if (!video.paused) {
    overlay.style.display = 'block';
    video.pause();
  }
});




