//ARROW ANIMATION

$('.container').on('mouseenter', function() {
  $('.button-fill').addClass('arrow-active');
  $('.button-fill').addClass('arrow-bounce');
});

$('.container').on('mouseleave', function() {
  $('.button-fill').removeClass('arrow-active');
  $('.button-fill').removeClass('arrow-bounce');
});


// SIDEBAR- HOVER ON ANCHORS

$('nav a').on('mouseenter', function() {
  $('nav a').addClass('nav-a-hover');
  $(this).removeClass('nav-a-hover');
});

$('nav a').on('mouseleave', function() {
  $('nav a').removeClass('nav-a-hover');
});



// TOGGLE NAV WHEN CLICKING HAMBURGER

$('#hamburger-menu').on('click', function() {
  $('.sidebar').toggleClass('sidebar-show');
  $('section').toggleClass('scale');
  $(this).toggleClass("is-active");
});


// EXIT SIDEBAR BY CLICKING OUTSIDE MENU

const $menu = $('.sidebar');

$(document).mouseup(function(e) {
  var clickedOutsideNavMenu = $(e.target).closest('.sidebar').length === 0;
  var clickedOutsideHamburgerIcon = $(e.target).closest('.hamburger').length === 0;
  if (clickedOutsideNavMenu && clickedOutsideHamburgerIcon) {
    $menu.removeClass('sidebar-show');
    $('.hamburger').removeClass('is-active');
    $('section').removeClass('scale');
  }
});


// OVERLAY
$('.container').on('mouseover', function() {
  $(this).addClass('transition-left');
});
$('.container').on('mouseout', function() {
  $(this).removeClass('transition-left');
});

// SMOOTH SCROLL


$('.down-arrow').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body, html').animate({
    scrollTop: targetOffset
  }, 600);
});


// RETURN TO TOP

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200); // Else fade out the arrow
  }
});
$('#return-to-top').click(function() { // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});