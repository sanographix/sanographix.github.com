$(function() {
  setTimeout(function(){
    
    $('.hatena-star-add-button').tipsy({
    gravity: 's',
    fade: false, 
    });
    
    $('.hatena-star-add-button').attr("title","★をつける");
  },1200);
});