
var aboutTop = null;
var headerTop = null;
var aboutHeight = null;
var project1 = null;
var project2 = null;
var project3 = null;
var project4 = null;
var sections = null;
var windowHeight = null;
var scrollArea = null;
var scrollPercent = null;
var scrollTop = null;
var musicTop = null;
var soccerTop = null;
var fitTop = null;
var dataTop = null;
var waterTop = null;
var prevOffSet = 0;

/* First main */
$(document).ready(function(){

  scrollTop     = $(window).scrollTop(),
  elementOffset = $('.about-section').offset().top,
  distance      = (elementOffset - scrollTop-400),
  end           = distance + $('.about-section').height();

  musicTop = $("#music-id").offset().top;
  soccerTop = $("#soccer-id").offset().top;
  fitTop = $("#fit-id").offset().top;
  dataTop = $("#data-id").offset().top;
  waterTop = $("#water-id").offset().top;

  //prevOffSet = $("#soccer-id").offset().top;

  windowHeight = window.innerHeight;

  aboutTop = $('.about-section').offset().top;
  headerTop = $('.header-section').offset().top;
  aboutHeight = $('.about-section').height();



  $('.about-section').stop(true,false).animate({ opacity: 0 }, 200);


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
        scrollTop: $(hash).offset().top
      }, 800, function(){

      });
    }
  });

});

/* Second main */
$(window).scroll(function() {

  var screenHeight = screen.height/5;
  var one = screen.height/11;
  var half = screen.height/1.5;

  /* FadeInOut for HOME SECTION*/
  if ($(this).scrollTop() < screenHeight-one-one) {

    $('.header-section').clearQueue();
    $('.header-section').stop(true,false).animate({ opacity: 1 }, 200);
  } else {

    $('.header-section').clearQueue();
    $('.header-section').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* Fade out for home section */
  if ($(this).scrollTop() < screenHeight) {

    $('.home-section').clearQueue();
    $('.home-section').stop(true,false).animate({ opacity: 1 }, 200);
  } else {

    $('.home-section').clearQueue();
    $('.home-section').stop(true,false).animate({ opacity: 0 }, 200);
  }

  /* FadeInOut for ABOUT SECTION */
  if ($(this).scrollTop() > (aboutTop-half) && $(this).scrollTop() < (aboutTop-one)) {
    $('.about-section').clearQueue();
    $('.about-section').stop(true,false).animate({ opacity: 1 }, 400);
  }
});


/* Third Main */
// The user scrolls
$(window).scroll(function(){
  // currentScroll is the number of pixels the window has been scrolled
  var currentScroll = $(this).scrollTop();
  // $currentSection is somewhere to place the section we must be looking at
  var currentSection = null;

  // We check the position of each of the divs compared to the windows scroll positon
  sections.each(function(){
    // divPosition is the position down the page in px of the current section we are testing
    var divPosition = $(this).offset().top;

    // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
    // the -1 is so that it includes the div 1px before the div leave the top of the window.

    if( divPosition-200 - 1 < currentScroll ){
      // We have either read the section or are currently reading the section so we'll call it our current section
      currentSection = $(this);

      // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
    }

    // This is the bit of code that uses the currentSection as its source of ID
    var id = currentSection.attr('id');

    //console.log(currentSection);
    $('a').removeClass('active');
    //$("[href=#"+id+"]").addClass('active');
    $('[href="#' + id + '"]').addClass('active');

  });

});

/* New functions */

$(window).scroll(function(){


  var scrollTops     = $(window).scrollTop();

  if(scrollTops>=musicTop-200 && (scrollTops<musicTop+50)) {
    document.getElementById("music-id").style.top = scrollTops - musicTop + "px";
  }

  if(scrollTops>=soccerTop-200 && (scrollTops<soccerTop+50)) {
    document.getElementById("soccer-id").style.top = scrollTops - soccerTop + "px";
  }

  if(scrollTops>=fitTop-200 && (scrollTops<fitTop+50)) {
    document.getElementById("fit-id").style.top = scrollTops - fitTop + "px";
  }

  if(scrollTops>=dataTop-200 && (scrollTops<dataTop+50)) {
    document.getElementById("data-id").style.top = scrollTops - dataTop + "px";
  }

  if(scrollTops>=waterTop-200 && (scrollTops<waterTop+50)) {
    document.getElementById("water-id").style.top = scrollTops - waterTop + "px";
  }



});


/* end */
