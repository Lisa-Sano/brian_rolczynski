$(document).ready(function() {
  $('map').imageMapResize();

  $('.toggle-link').click(function(){
    $(this).text(function(i,old){
        return old=='[EXPAND]' ?  '[RETRACT]' : '[EXPAND]';
    });
  });

  $('#pub-expand-all').click(function() {
    $('.publications-section br').removeClass('hidden');
    $('.publications-section .collapse').collapse('show');
    $('.toggle-link').text('[RETRACT]');
  });

  $('#pub-retract-all').click(function() {
    $('.publications-section br').addClass('hidden');
    $('.publications-section .collapse').collapse('hide');
    $('.toggle-link').text('[EXPAND]');
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