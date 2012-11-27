$(function(){

  $("body").click(function () {
    $(".container").fadeToggle("slow");
  });

  setInterval(function(){
      $(".overlay")
      .animate({ backgroundColor: "#ff0000"}, 400) //赤
      .animate({ backgroundColor: "#de00ff"}, 400) //紫
      .animate({ backgroundColor: "#0018ff"}, 400) //青
      .animate({ backgroundColor: "#00e4ff"}, 400) //水
      .animate({ backgroundColor: "#00ff2a"}, 400) //緑
      .animate({ backgroundColor: "#ff8a00"}, 400) //オレンジ






  }, 2400);

});