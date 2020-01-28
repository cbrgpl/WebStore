$(document).ready(function(){
  $('.slide-list').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      appendDots: $('.nav-dots'),
      infinite: true,
  });
});