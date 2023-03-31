/* NAVBAR ------------------------------------------------- */
// Navbar appears after homescreen
$(document).ready(function() {
  var navbar = $('.navbar');
  var section1 = $('#home').outerHeight() - 100;
  var section2 = $('#about').offset().top;

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

// Navbar .active changes
$(document).ready(function() {
  // Get the current URL
  var currentURL = window.location.href;

  // Add the active class to the link with a matching href attribute
  $('nav a[href="' + currentURL + '"]').addClass('active');

  // Scroll event
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();

    // Get the top position of section-1
    var section1Top = $('#about').offset().top;

    // Get the top and bottom position of section-2
    var section2Top = $('#work').offset().top;
    var section2Bottom = section2Top + $('#work').outerHeight();

    // Get the top and bottom position of section-3
    var section3Top = $('#contact').offset().top;
    var section3Bottom = section3Top + $('#contact').outerHeight();

    // Check if the bottom of the web page is reached
    if (scrollPos + windowHeight >= $(document).height()) {
      // Add the active class to the link with data-section="section-3"
      $('[data-section="contact"]').addClass('active');

      // Remove the active class from all other links
      $('[data-section]').not('[data-section="contact"]').removeClass('active');
    } else {
      // Check if the top of section-2 is reached
      if (scrollPos >= section2Top) {
        // Add the active class to the link with data-section="section-2"
        $('[data-section="work"]').addClass('active');

        // Remove the active class from all other links
        $('[data-section]').not('[data-section="work"]').removeClass('active');
      } else {
        // Check if the top of section-1 is reached
        if (scrollPos >= section1Top) {
          // Add the active class to the link with data-section="section-1"
          $('[data-section="about"]').addClass('active');

          // Remove the active class from all other links
          $('[data-section]').not('[data-section="about"]').removeClass('active');
        } else {
          // Check the current URL and add the active class to the link with a matching href attribute
          $('nav a[href="' + currentURL + '"]').addClass('active');

          // Remove the active class from all other links
          $('nav a').not('[href="' + currentURL + '"]').removeClass('active');

          // Remove the active class from all links with data-section
          $('[data-section]').removeClass('active');
        }
      }
    }
  });
});
