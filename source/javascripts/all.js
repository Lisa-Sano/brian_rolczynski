$(document).ready(function() {
  $('map').imageMapResize();

  $('.toggle-link').click(function() {
    $(this).find("span").toggleClass("hidden");
    $(this).parent().find("br").toggleClass("hidden");
  });
  
  $('#expand-all').click(function() {
    $('.publications-section .collapse').collapse('show');
    $('.publications-section .expand').addClass('hidden');
    $('.publications-section .retract').removeClass('hidden');
    $('.publications-section br').removeClass('hidden');
  });

  $('#retract-all').click(function() {
    $('.publications-section .collapse').collapse('hide');
    $('.publications-section .expand').removeClass('hidden');
    $('.publications-section .retract').addClass('hidden');
    $('.publications-section br').addClass('hidden');
  });
});