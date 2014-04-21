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
          width : '300px',
          margin : '0 0 0 0'
        });

        $('iframe.photoset').css('height', $('iframe.photoset').contents().find('body').height() + 'px');

      }

    });


});