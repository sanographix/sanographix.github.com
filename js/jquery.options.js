$(function(){

  $("body").click(function () {
    $(".container").fadeToggle("slow");
  });

  setInterval(function(){
      $(".overlay")
      .animate({ backgroundColor: "#ff0000"}, 440) //赤
      .animate({ backgroundColor: "#de00ff"}, 440) //紫
      .animate({ backgroundColor: "#00aeff"}, 440) //青
      .animate({ backgroundColor: "#00ff2a"}, 440) //緑
  }, 0);

});