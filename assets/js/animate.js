$(document).ready(function() {
  // Check if element is scrolled into view
  $(".grid__item").addClass("animated");
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      var elemBottom2 = elemTop + $(elem).height() - 20;

      return (((elemBottom <= docViewBottom) && (elemTop >= docViewTop))) || (((elemBottom2 <= docViewBottom) && (elemTop >= docViewTop)));
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
