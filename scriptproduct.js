$('.add-to-cart').click(function(){
    $('.cart').style.display = "none";
    $('.added_to_cart').style.display = "block";

  });
  
  $('.remove').click(function(){
    $('.cart').style.display = "block";
    $('.added_to_cart').style.display = "none";
  });