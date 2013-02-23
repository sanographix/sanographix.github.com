$(document).ready(function(){
    $("#youtube-iframe").fitVids();

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

});