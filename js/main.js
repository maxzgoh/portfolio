//ICON ANIMATION

$('.container').on('mouseenter', function() {
  $('.container .icon').addClass('icon-active');
  $('.container .icon').addClass('icon-bounce');
});

$('.container').on('mouseleave', function() {
  $('.container .icon').removeClass('icon-active');
  $('.container .icon').removeClass('icon-bounce');
});

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


// DOWN ARROW

$(function() {
  setTimeout('topArrow()');
});

function topArrow() {
  $('.topArrow').animate({
    marginBottom: '-=15px'
  }, 800).animate({
    marginBottom: '+=15px'
  }, 800);
  setTimeout('topArrow()', 1600);
}

// OVERLAY
$('#section-1-container').on('mouseover', function() {
  $('#section-1-overlay').addClass('transition-left');
});
$('#section-1-container').on('mouseout', function() {
  $('#section-1-overlay').removeClass('transition-left');
});

$('#section-2-container').on('mouseover', function() {
  $('#section-2-overlay').addClass('transition-left');
});
$('#section-2-container').on('mouseout', function() {
  $('#section-2-overlay').removeClass('transition-left');
});

$('#section-3-container').on('mouseover', function() {
  $('#section-3-overlay').addClass('transition-left');
});
$('#section-3-container').on('mouseout', function() {
  $('#section-3-overlay').removeClass('transition-left');
});

$('#section-4-container').on('mouseover', function() {
  $('#section-4-overlay').addClass('transition-left');
});
$('#section-4-container').on('mouseout', function() {
  $('#section-4-overlay').removeClass('transition-left');
});

$('#section-5-container').on('mouseover', function() {
  $('#section-5-overlay').addClass('transition-left');
});
$('#section-5-container').on('mouseout', function() {
  $('#section-5-overlay').removeClass('transition-left');
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