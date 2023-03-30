/* WORK FILTERING ------------------------------------------------- */
/* Filter ------------ */
(function () {

  // var
  var $imgs = $('.work-project'); //img div
  var $filters = $('.filterlist'); //filter links
  var tagged = {}; //using

  // Get images
  $imgs.each(function () {
    var img = this;
    var tags = $(this).data('tags');

    if (tags) {
      tags.split(',').forEach(function (tagName) {
        if (tagged[tagName] == null) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(img);
      });
    }
  });


// ALL link
  $('<li/>').appendTo($filters).append(
    $('<a/>', {
      text: ' ALL',
      class: 'active',
      click: function () {
        $(`.filterlist li a`).removeClass('active');
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');
        $imgs.fadeIn(200);
      }
    })
);

// Filters link
  $.each(tagged, function (tagName) {
    $('<li/>').appendTo($filters).append(
      $('<a/>', {
        text: tagName,
        click: function () {
          $(`.filterlist li a`).removeClass('active');
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
          $imgs
            .hide()
            .filter(tagged[tagName])
            .fadeIn();
        }
      })
    );
  });

}());
