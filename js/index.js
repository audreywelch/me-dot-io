
//Initial text fade-in
$(function() {
  $('.fade-in').each(function() {
    $(this).fadeIn(1000).delay(1000);
  });
});

//BG Fade-in
$(function() {
$(window).scroll(function() {
  
  if($(window).scrollTop() > 75 ) {
    $('.bg').addClass('show');
    $('.scroll').addClass('white');
    
  }else {
    
    $('.bg').removeClass('show');
    $('.scroll').removeClass('white');
    
  };
});
});
// Smooth Scrolling
 $(document).ready(function() {
      $('a[href^="#"]').click(function() {
          var target = $(this.hash);
          if (target.length == 0) target = $('html');
          $('html, body').animate({ scrollTop: target.offset().top }, 1000);
          return false;
      });
  });