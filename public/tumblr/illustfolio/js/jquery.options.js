$(function(){

    // flexslider
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: true,
      animationLoop: true,
      slideshow: true,
      slideshowSpeed: 6000
    });


  $(window).load(function(){

    // photoset(979px以下)
    if ($(window).width() < 1200) {

      $('iframe.photoset').contents().find('.photoset_row').css({
        width : 'auto',
        height : 'auto'
      });

      $('iframe.photoset').contents().find('.photoset_photo').css({
        display : 'block',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').contents().find('.photoset_row img').css({
        width : '500px',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

    }


    // photoset(979px以下)
    if ($(window).width() < 979) {

      $('iframe.photoset').contents().find('.photoset_row').css({
        width : 'auto',
        height : 'auto'
      });

      $('iframe.photoset').contents().find('.photoset_photo').css({
        display : 'block',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').contents().find('.photoset_row img').css({
        width : '400px',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

    }


    // スマホでphotosetの中をwidth100%にする
    if ($(window).width() < 480) {

      $('iframe.photoset').contents().find('.photoset_row').css({
        width : 'auto',
        height : 'auto'
      });

      $('iframe.photoset').contents().find('.photoset_photo').css({
        display : 'block',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').contents().find('.photoset_row img').css({
        width : '300px',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

    }



  });


});