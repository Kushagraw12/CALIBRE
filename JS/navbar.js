//The variable takes the value of the new position each time
var scrollp = 0;
(function ($) {
  $(document).ready(function () {
    $(function () {
      $(window).scroll(function () {
        // ask about the position of scroll

        if ($(this).scrollTop() < scrollp) {
          $("#navbar").fadeIn();
          scrollp = $(this).scrollTop();
        } else {
          $("#navbar").fadeOut();
          scrollp = $(this).scrollTop();
        }
      });
    });
  });
})(jQuery);
