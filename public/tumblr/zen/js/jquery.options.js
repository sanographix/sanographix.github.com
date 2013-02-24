$(document).ready(function(){
    $(".video-iframe").fitVids();

    $(".mobile-nav-panel").click(function(){
      $(".nav").toggleClass("active");
    });

    $(".panel-social-button .btn").click(function(){
      $(".social-buttons").slideToggle();
    });

  setTimeout(function(){

    $('.hatena-star-add-button').tipsy({
    gravity: 's',
    fade: false
    });

    $('.hatena-star-add-button').attr("title","★をつける");
  },3000);


  $(window).load(function(){

    // スマホでphotosetの中をwidth100%にする
    if ($(window).width() < 480) {

      $('iframe.photoset').contents().find('.photoset_row').css({
        width : 'auto',
        height : 'auto',
      });
      $('iframe.photoset').contents().find('.photoset_row img').css('width', '300px');

    }

  });


});