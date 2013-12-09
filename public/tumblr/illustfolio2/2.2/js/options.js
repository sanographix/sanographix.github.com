$(function () {

  // 最近の記事出す
  $(function(){
    $("#related").jq_tumblrPostList({
      api_key:"{text:Tumblr API Key}",
      domain: location.host, //取得先となるTumblrサイトのドメイン
      limit:3 //記事の数
    });
  });

  // タグリスト記事出す
  (function() {
    var posts = new TumblrPosts({
      // ドメインと取得する最大記事数
      domain: location.host,
      maxNum:300
    });
    posts.bind(posts.EVENT_COMPLETE, function(e) {
      var that = this;
      // getTags() でタグリストを取得
      $.each(this.getTags(), function(i, tag) {
        var html = '<li class="level' + (tag.count % 6 + 1) + '">'
        + '<span class="sharp">#</span><a href="/tagged/' + tag.name + '">' + tag.name + '</a></li>';
        $(html).appendTo($("ul#tags"));
      });
    });
    posts.run();
  })();

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
