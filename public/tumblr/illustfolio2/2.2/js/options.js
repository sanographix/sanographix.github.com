$(function () {

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


});
