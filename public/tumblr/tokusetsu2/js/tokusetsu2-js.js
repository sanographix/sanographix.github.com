$(document).ready(function(){
    $("#youtube-iframe").fitVids();

    $('.header-nav').clingify();

    $(".available-btn").click(function(){
      $(".available-dropdown").slideToggle("fast");
    });

});