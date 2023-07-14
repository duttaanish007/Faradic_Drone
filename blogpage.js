
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


  // nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});