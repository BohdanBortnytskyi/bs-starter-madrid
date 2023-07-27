import 'bootstrap/js/tooltip.js';
import 'bootstrap/js/popover.js';

export function popoverInit() {
  const BREAK_POINT = 768;

  if($(document).width() >= BREAK_POINT) {
    let isVisible = false;
    let hideAllPopovers = function() {
      $('[data-toggle="popover"]').each(function() {
          $(this).popover('hide');
      });
    };
    $('[data-toggle="popover"]').popover({
      html: 'true',
      // placement: 'bottom',
      // title : '<div class="close" aria-hidden="true">&times;</div>',
      template: '<div class="popover" role="tooltip"><div class="close" tabindex="0" role="button">&#x2715;</div><p class="popover-content"></p></div>',
      trigger: 'manual'
    }).on('click', (ev) => {
      if (isVisible) {
        hideAllPopovers();
      }
      $(ev.currentTarget).popover('show');
      $('.popover').off('click').on('click', (e) => {
          e.stopPropagation(); // prevent event for bubbling up => will not get caught with document.onclick
      });
      isVisible = true;
      ev.stopPropagation()
    }).on('shown.bs.popover', (eventShown) => {
      let $popup = $('#' + $(eventShown.target).attr('aria-describedby'));
      $popup.find('div.close').on('click', () => {
        $popup.popover('hide');
      });
    });
    $(document).on('click', () => {
      hideAllPopovers();
      isVisible = false;
    });
  }

};
