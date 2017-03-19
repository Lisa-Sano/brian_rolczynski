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

  $('#research-icon').hover(function() {
    $(this).attr('src','/gifs/RESEARCH.gif');
  },function() {
    $(this).attr('src','/images/RESEARCH_ICON.png');
  });

  $('#publications-icon').hover(function() {
    $(this).attr('src','/gifs/PAPERS.gif');
  },function() {
    $(this).attr('src','/images/PUBLICATIONS_ICON.png');
  });

  $('#cv-icon').hover(function() {
    $(this).attr('src','/gifs/CV.gif');
  },function() {
    $(this).attr('src','/images/CV_ICON.png');
  });

  $('#about-icon').hover(function() {
    $(this).attr('src','/gifs/ABOUTME.gif');
  },function() {
    $(this).attr('src','/images/ABOUT_ICON.png');
  });
});