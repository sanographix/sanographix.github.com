$(document).ready(function(){
    $("#youtube-iframe").fitVids();

    $(".mobile-nav-panel").click(function(){
      $(".nav").toggleClass("active");
    });

    $(".panel-social-button").click(function(){
      $(".social-buttons").slideToggle();
    });

});