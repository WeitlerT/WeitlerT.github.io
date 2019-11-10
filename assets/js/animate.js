$(document).ready(function() {
  // Check if element is scrolled into view
  $(".grid__item").addClass("animated");
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(refreshElemScroll);

  function refreshElemScroll() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeInRight");
        $(this).addClass('animateVisible');
      }
    });
  }

  refreshElemScroll();

});
