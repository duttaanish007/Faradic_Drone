// let mainNav = document.getElementById("js-menu");
// let navBarToggle = document.getElementById("js-navbar-toggle");

// navBarToggle.addEventListener("click", function() {
//   mainNav.classList.toggle("active");
// });

// When the user scrolls the page, execute myFunction
// window.addEventListener("scroll", function(){
//             var header = document.querySelector("header");
//             header.classList.toggle("sticky", window.scrollY > 0);
//         })




//Menu toggle-button
$('.menu-icon').on('click', function(){
  $('nav ul').toggleClass('showing');
});

//scrolling effect

$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  }else{
    $('nav').removeClass('black');
  }
});