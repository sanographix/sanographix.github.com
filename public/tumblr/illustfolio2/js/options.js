$(function () {

  $(".mobile-nav-panel").click(function(){
    $(".header-nav.pull-right").toggleClass("active");
  });

  // flexslider
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 6000
  });

  $(".share-button .btn").click(function (event) {
     event.stopPropagation();
    $(".share-pulldown").fadeToggle(200);
  });

  $(".share-pulldown").skOuterClick(function() {
    $(this).hide();
  });

  $(".header-tags a").click(function () {
    $(".tag-list").toggle();
    return false;
  });

  // fitvids
  $(".video-iframe").fitVids();


  // スマホとタブレットでphotosetの中をwidth100%にする
  $(window).load(function(){
    if ($(window).width() < 767) {
      $('iframe.photoset').contents().find('.photoset_row').css({
        width : 'auto',
        height : 'auto'
      });
      $('iframe.photoset').contents().find('.photoset_photo').css({
        display : 'block',
        margin : '0 0 0 0'
      });
      $('iframe.photoset').contents().find('.photoset_row img').css({
        width : '100%',
        margin : '0 0 0 0'
      });
      $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');
    }
  });

});
