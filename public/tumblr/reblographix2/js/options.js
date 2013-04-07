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

  // fitvids
  $(".video-iframe").fitVids();


  $(window).load(function(){

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
        width : '280px',
        margin : '0 0 0 0'
      });

      $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

    }

  });

});