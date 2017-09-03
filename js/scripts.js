$(window).load(function() {
  $('.banner').unslider({
        fluid: true,
        dots: true,
        speed: 500,
        delay: 4000
      });
  if(window.chrome) {
        $('.banner li').css('background-size', '100% 100%');
      }
});

$(function() {
  var pull = $('#pull');
  var menu = $('nav ul');
        
          $(pull).on('click', function(e) {
              e.preventDefault();
              menu.slideToggle();
          });
      });
$(window).resize(function(){
  var menu = $('nav ul');
  var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

$(document).ready(function(){
 
var counter = 0,
$items = $('.slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('show');
$items.eq(itemToShow).addClass('show');
};
 
$('.next').on('click', function(){
counter++;
showCurrent();
});
 
$('.prev').on('click', function(){
counter--;
showCurrent();
});
 
});

$(document).ready(function(){
 
var counter = 0,
$items = $('.quote-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('show');
$items.eq(itemToShow).addClass('show');
};
 
$('.quote-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.quote-prev').on('click', function(){
counter--;
showCurrent();
});
 
});
// ---------------------------ow carrousel--
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoPlay:true,
    autoWidth:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})

// ---------------------------filtering--
$(document).ready(function(){

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
          }
          else
          {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
$(".filter").not('.'+value).hide('3000');
$('.filter').filter('.'+value).show('3000');

}
});
  
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});