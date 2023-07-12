
//Menu toggle-effect
$(document).ready(function(){
    $(".menu-icon").on("click",function(){
      $("nav ul").toggleClass("showing");
    });
  });
  
  //Scrolling Effect
  $(window).on('scroll', function(){
    if($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else{
      $('nav').removeClass('black')
    }
  })

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  