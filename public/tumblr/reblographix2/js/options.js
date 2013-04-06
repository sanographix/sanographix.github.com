$(function(){

  var $container = $('.page-index #container');

  $container.infinitescroll({
    navSelector  : '#pager',
    nextSelector : '#pager .next',
    itemSelector : '.post',
    animate      : false,
    loading: {
        msgText: "Loading...",
        finishedMsg: 'The End'
      }
    }
  );

  //パーマリンクが開いてるときindexをスクロールさせない対策
  $(".page-index .post").click(function(){
    $('.page-index').addClass("fixed");
		return false;
  });

  $("*").mousedown(function(){
    $('body.fixed').removeClass("fixed");
  });

  // ナビゲーション出てるときはbodyにclass振る
  $("#nav").click(function(){
    $('.page-index').toggleClass("nav-open");
    return false;
  });

  $(".page-index").click(function(){
    $('.page-index').removeClass("nav-open");
  });

  // パーマリンクはtarget_blank
	$(".page-permalink a").attr("target","_blank");

  // nanoscroller
  $(".nano").nanoScroller();

  // ソーシャルボタン
  $(".btn-share").click(function () {
    $(".social-buttons").toggle();
  });

  // fitvids
  $(".video-iframe").fitVids();


});