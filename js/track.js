var scrollTop = null;
var windowHeight = null;

$(document).ready(function() {
  scrollTop     = $(window).scrollTop();
  windowHeight = window.innerHeight;

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
        scrollTop: $(hash).offset().top -70
      }, 800, function(){

      });
    }
  });

});

$(window).scroll(function() {

  if($(window).scrollTop() < windowHeight) {
    document.getElementById('section-nav').style.position = 'absolute';
    document.getElementById('navigation').style.backgroundColor = 'transparent';
    document.getElementById('section-nav').style.top = '10vh';
    var navLink = document.getElementsByClassName('nav-link');

  } else {
    document.getElementById('section-nav').style.position = "fixed";
    document.getElementById('navigation').style.backgroundColor = 'white';
    document.getElementById('section-nav').style.top = '0';
    document.getElementById('navbar-title').style.color = 'black';
    var navLink = document.getElementsByClassName('nav-link');
    Array.prototype.filter.call(navLink, function(xx){
      xx.style.color = 'black';
    });
  }




    if(($(window).scrollTop() > ($("#section-portfolio").offset().top-200)) && ($(window).scrollTop() < ($("#section-portfolio").offset().top + document.getElementById('section-portfolio').clientHeight-400)) ) {
      document.getElementById("nav-item-portfolio").style.borderBottom = "1px solid black";
    }
    else {
      document.getElementById("nav-item-portfolio").style.borderBottom = "0px solid black";
    }

    if($(window).scrollTop() > ($("#section-contact").offset().top-400) ) {
      document.getElementById("nav-item-contact").style.borderBottom = "1px solid black";
    }
    else {
      document.getElementById("nav-item-contact").style.borderBottom = "0px solid black";
    }

});
