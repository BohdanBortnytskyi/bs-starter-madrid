import { options} from './options';
// import 'slick-carousel/slick/slick';

// Sliders

if ($('.rd-key-financials__slider').length) {
  $('.rd-key-financials__slider').slick(options.sliders.keyFinancialsSlider);
}

if ($('.rd-image-stories__slider').length) {
  $('.rd-image-stories__slider').slick(options.sliders.imageStoriesSlider);
}
