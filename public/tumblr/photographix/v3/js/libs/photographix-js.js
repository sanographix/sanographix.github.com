$(function(){
  $('#main').infinitescroll({

    navSelector  : ".pagenation-index",
    nextSelector : ".pagenation-index a.next",
    itemSelector : ".post",
    animate      : false,
    loading: {
        img: "//sanographix.github.io/public/tumblr/photographix/v3/images/loading.gif",
        msgText: "Loading...",
        finishedMsg: 'The End'
    }
  });

});