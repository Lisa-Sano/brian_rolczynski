$(document).ready(function() {
  $('map').imageMapResize();

  var email = "brolczynski";
  var domain_name = "uchicago.edu";
  $('#email-link').attr("href", "mailto:" + email + "@" + domain_name);

  $('.toggle-link').click(function(){
    $(this).text(function(i,old){
        return old == '[EXPAND]' ?  '[RETRACT]' : '[EXPAND]';
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

  $('#research-expand-all').click(function() {
    $('.research-content .collapse').collapse('show');
  });

  $('#research-retract-all').click(function() {
    $('.research-content .collapse').collapse('hide');
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

  $('#email-icon').hover(function() {
    $(this).attr('src','/gifs/EMAIL.gif');
  },function() {
    $(this).attr('src','/images/EMAIL_ICON.gif');
  });
});