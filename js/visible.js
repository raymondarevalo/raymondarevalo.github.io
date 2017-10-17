
var aboutTop = null;
var headerTop = null;
var aboutHeight = null;
var project1 = null;
var project2 = null;
var project3 = null;
var project4 = null;



$(document).ready(function(){
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('.about-section').offset().top,
      distance      = (elementOffset - scrollTop-400),
      end           = distance + $('.about-section').height();



  aboutTop = $('.about-section').offset().top;
  headerTop = $('.header-section').offset().top;
  aboutHeight = $('.about-section').height();

  project1 = $('.p1').offset().top;
  project2 = $('.p2').offset().top;
  project3 = $('.p3').offset().top;
  project4 = $('.p4').offset().top;


  $('.about-section').hide();
  $('.p1').hide();
  $('.p2').hide();
  $('.p3').hide();
  $('.p4').hide();
});

$(window).scroll(function() {

  var screenHeight = screen.height/5;
  var one = screen.height/11;
  var half = screen.height/1.5;

  /* FadeInOut for HOME SECTION */
  if ($(this).scrollTop() < screenHeight) {
    console.log("Fade In");
    $('.home-section').clearQueue();
    $('.home-section').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    console.log("Fade out");
    $('.home-section').clearQueue();
    $('.home-section').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for ABOUT SECTION */

  if ($(this).scrollTop() > (aboutTop-half) && $(this).scrollTop() < (aboutTop-one)) {
    $('.about-section').clearQueue();
    $('.about-section').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    $('.about-section').clearQueue();
    $('.about-section').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for p1 */

  if ($(this).scrollTop() > (project1-half) && $(this).scrollTop() < (project1+one)) {
    $('.p1').clearQueue();
    $('.p1').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    $('.p1').clearQueue();
    $('.p1').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for p2 */
  if ($(this).scrollTop() > (project2-half) && $(this).scrollTop() < (project2+one)) {
    $('.p2').clearQueue();
    $('.p2').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    $('.p2').clearQueue();
    $('.p2').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for p3 */
  if ($(this).scrollTop() > (project3-half) && $(this).scrollTop() < (project3-one)) {
    $('.p3').clearQueue();
    $('.p3').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    $('.p3').clearQueue();
    $('.p3').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for p4 */
  if ($(this).scrollTop() > (project4-half) && $(this).scrollTop() < (project4-one)) {
    $('.p4').clearQueue();
    $('.p4').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    $('.p4').clearQueue();
    $('.p4').stop(true,false).animate({ opacity: 0 }, 200);
  }


 });

 $('a[href*="#"]')
   // Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
     // On-page links
     if (
       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       &&
       location.hostname == this.hostname
     ) {
       // Figure out element to scroll to
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       // Does a scroll target exist?
       if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000, function() {
           // Callback after animation
           // Must change focus!
           var $target = $(target);
           $target.focus();
           if ($target.is(":focus")) { // Checking if the target was focused
             return false;
           } else {
             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
             $target.focus(); // Set focus again
           };
         });
       }
     }
   });
