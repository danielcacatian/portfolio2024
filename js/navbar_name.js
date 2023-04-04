$(document).ready(function() {
  $(".logo").hover(
    function() {
      $(".name").animate({
        left: '+=205px'
      }, 250);
    },
    function() {
      $(".name").animate({
        left: '-=205px'
      }, 250);
    }
  );
});
