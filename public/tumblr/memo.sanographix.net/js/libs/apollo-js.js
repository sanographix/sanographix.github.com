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

    // amazlet用のonclick属性つける
    $(".amazlet-image a").click(function() {
      ga('send', 'event', 'amazlet', 'Click', 'amazlet-image');
    });
    $(".amazlet-name a").click(function() {
      ga('send', 'event', 'amazlet', 'Click', 'amazlet-title');
    });
    $(".amazlet-link a").click(function() {
      ga('send', 'event', 'amazlet', 'Click', 'amazlet-link');
    });

    // star
    setTimeout(function(){
      $('.hatena-star-add-button').tipsy({
      gravity: 's',
      fade: false
      });
      $('.hatena-star-add-button').attr("title","★をつける");
    },3000);

    // 外部サイトはblankつける
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

    // notecount
    $(".page-permalink .notecount a").click(function(){
      $(".notecontainer").slideToggle();
      return false;
    });

    // 検索フォーム
    $(".nav-search a").click(function(){
      $(".search-form").toggleClass("active");
      return false;
    });

    $(window).load(function(){

      // スマホでphotosetの中をwidth100%にする
      if ($(window).width() < 760) {

        $('iframe.photoset').contents().find('.photoset_row').css({
          width : 'auto',
          height : 'auto',
          margin : '0'
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

// Facebookの反応（いいねとシェアの数）を取得
function get_social_count_facebook(url, counterId) {
  $.ajax({
    url:'https://graph.facebook.com/',
    dataType:'jsonp',
    data:{
      id:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.shares || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
// Twitterの反応（ツイートやリツイート数）を取得
function get_social_count_twitter(url, counterId) {
  $.ajax({
    url:'http://urls.api.twitter.com/1/urls/count.json',
    dataType:'jsonp',
    data:{
      url:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res.count || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}
// はてなブックマークでブックマークされている数を取得
function get_social_count_hatebu(url, counterId) {
  $.ajax({
    url:'http://api.b.st-hatena.com/entry.count?callback=?',
    dataType:'jsonp',
    data:{
      url:url
    },
    success:function(res){
      $('#' + counterId + ' .count').text( res || 0 );
    },
    error:function(){
      $('#' + counterId + ' .count').text('');
    }
  });
}