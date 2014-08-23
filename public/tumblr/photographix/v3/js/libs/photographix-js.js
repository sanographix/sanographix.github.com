$(function(){
  $('#main').infinitescroll({

    navSelector  : ".pagenation-index",
    nextSelector : ".pagenation-index a.next",
    itemSelector : ".post",
    animate      : false,
    loading: {
        img: "../images/loading.gif",
        msgText: "Loading...",
        finishedMsg: 'The End'
    }
  });

});