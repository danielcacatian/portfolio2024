$(document).ready(function(){
  $(".logo").hover(
    function(){
      $(".name").animate({marginRight: '+=200px'}, 'fast');
    },
    function(){
      $(".name").animate({marginRight: '-=200px'}, 'fast');
    }
  );
});
