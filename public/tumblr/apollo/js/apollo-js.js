// 最近の投稿

function tumblr(resp) {
    var posts = resp.posts;
    $('#recent .loading').replaceWith('<ul/>');
    $ul = $('#recent ul');
    for (var i=0; i<posts.length; i++) {
      var p = posts[i];
                  var title = p['regular-title'] || p['link-text'] || null;
      if (title)
        $ul.append('<li><a href="'+p['url']+'">'+title+'</a></li>');
    }
}

$(document).ready(function(){

    // text投稿のyoutubeもレスポンシブにする
    $(".post.text iframe[src*='youtube.com']").wrap("<div class='video-iframe'></div>");

    // fitvid
    $(".video-iframe").fitVids();

    $(".mobile-nav-panel").click(function(){
      $(".nav").toggleClass("active");
    });

    // シンタックスハイライト用のclassつける
    $(".entry-content pre:not(.line-pre)").addClass("prettyprint"); // gistは除外

    setTimeout(function(){
      $('.hatena-star-add-button').tipsy({
      gravity: 's',
      fade: false
      });
      $('.hatena-star-add-button').attr("title","★をつける");
    },3000);

});