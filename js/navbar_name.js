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

// Responsive Navbar
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}
