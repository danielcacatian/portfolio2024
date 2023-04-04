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

// Z-index shifts after homescreen
$(document).ready(function() {
  // Get the position of the top of the page
  var video = $('.project-bg');
  var topPosition = $(window).scrollTop();

  // Check if the user has scrolled away from the top of the page
  if (topPosition > 0) {
    // If yes, change the z-index of the box to 10
    video.css("z-index", -2);
  }

  // When the user scrolls, check the position of the top of the page again
  $(window).scroll(function() {
    var topPosition = $(this).scrollTop();

    // If the user has scrolled away from the top of the page, change the z-index of the box to 10
    if (topPosition > 0) {
      video.css("z-index", -2);
    }
    // Otherwise, change the z-index of the box back to 1
    else {
    video.css("z-index", 9999);
    }
  });
});
