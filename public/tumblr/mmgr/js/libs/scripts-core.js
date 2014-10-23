$(document).ready(function(){

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

});