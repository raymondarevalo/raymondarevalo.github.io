
var aboutTop = null;
var headerTop = null;
var aboutHeight = null;
var project1 = null;
var project2 = null;
var project3 = null;
var project4 = null;
var sections = null;


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
  $('.about-section').stop(true,false).animate({ opacity: 0 }, 200);
  $('.p1').stop(true,false).animate({ opacity: 0 }, 200);
  $('.p2').stop(true,false).animate({ opacity: 0 }, 200);
  $('.p3').stop(true,false).animate({ opacity: 0 }, 200);
  $('.p4').stop(true,false).animate({ opacity: 0 }, 200);

  sections = $('.idSection');

  $('.about-section').hide();
  $('.p1').hide();
  $('.p2').hide();
  $('.p3').hide();
  $('.p4').hide();

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top-200
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });

});

$(window).scroll(function() {

  var screenHeight = screen.height/5;
  var one = screen.height/11;
  var half = screen.height/1.5;

  /* FadeInOut for nav bar */
  if($(window).scrollTop() > (screen.height-one-one-one)) {
    $(".header-section").addClass("header-active");
  } else {
    $(".header-section").removeClass("header-active");
  }


  /* FadeInOut for HOME SECTION
  if ($(this).scrollTop() < screenHeight-one-one) {
    console.log("Fade In");
    $('.header-section').clearQueue();
    $('.header-section').stop(true,false).animate({ opacity: 1 }, 200);
  } else {
    console.log("Fade out");
    $('.header-section').clearQueue();
    $('.header-section').stop(true,false).animate({ opacity: 0 }, 200);
  }
  */


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
    $('.about-section').stop(true,false).animate({ opacity: 1 }, 400);
  } /*else {
    $('.about-section').clearQueue();
    $('.about-section').stop(true,false).animate({ opacity: 0 }, 200);
  }*/









});

/* start */
// $sections incleudes all of the container divs that relate to menu items.

// The user scrolls
$(window).scroll(function(){
  console.log("Printing here");
  // currentScroll is the number of pixels the window has been scrolled
  var currentScroll = $(this).scrollTop();
  // $currentSection is somewhere to place the section we must be looking at
  var currentSection = null;
  console.log("before: " + currentScroll);

  // We check the position of each of the divs compared to the windows scroll positon
  sections.each(function(){
    // divPosition is the position down the page in px of the current section we are testing
    var divPosition = $(this).offset().top;

    // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
    // the -1 is so that it includes the div 1px before the div leave the top of the window.
    console.log("divPosition: " + divPosition);
    console.log("currentScroll: "+ currentScroll);

    if( divPosition-200 - 1 < currentScroll ){
      // We have either read the section or are currently reading the section so we'll call it our current section
      currentSection = $(this);
      console.log("In current Section");

      // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
    }

    // This is the bit of code that uses the currentSection as its source of ID
    var id = currentSection.attr('id');
    console.log(id);

    //console.log(currentSection);
    $('a').removeClass('active');
    //$("[href=#"+id+"]").addClass('active');
    $('[href="#' + id + '"]').addClass('active');

  })

});
/* end */
