/* NAVBAR ------------------------------------------------- */
// Navbar appears after homescreen
$(document).ready(function() {
  var navbar = $('.navbar');
  var section1 = $('#project').outerHeight() - 100;
  var section2 = $('#details').offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > section1) {
      navbar.removeClass('hidden');
    } else {
      navbar.addClass('hidden');
    }

    if ($(window).scrollTop() > section2) {
      navbar.addClass('fixed');
    } else {
      navbar.removeClass('fixed');
    }
  });
});
