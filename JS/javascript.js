// promo__inner
$(document).ready(function(){
   $(".promo__inner").slick({
       speed: 300,
       easing: "ease",
       autoplay: false,
       autoplaySpeed: 5000,
       responsive:[
          {
            breakpoint: 768,
            settings:{
               arrows: false,
               // autoplay: true,
            }
            }
         ],
   })
         



$(".product__favorit").on("click", function(){
   $(this).toggleClass("product__favorit-active")
})


// --------/MODAL-------

$("#footer__inner-item").on("click", function(){

   $(".modal").addClass("open");

})
$("#closeModal").on("click", function(){

   $(".modal").addClass("open");
   
   $("#closeModal").on("click", function(){
      $(".modal").removeClass("open");
      
})

})
// --------/MODAL-------

})

















