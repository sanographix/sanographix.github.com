(function($){
    $.fn.extend({
        jq_tumblrPostList: function(options){

            var defaults={
                api_key: "mVhQRZlQwEEnxrkRsHsupTzfjcUuWGVInzi1iRMJx4s0xihNqQ",
                domain: "stainless-note.tumblr.com",
                limit: 5,
                width: 300 // !!!
            }
            var o = $.extend(defaults, options);
            var objList = this;
            //console.log(objList);
            return this.each(function() {

                $.getJSON(
                    "http://api.tumblr.com/v2/blog/"+o.domain+"/posts?api_key="+o.api_key+"&limit="+o.limit+"&jsonp=?",
                    function(data){
                        //console.log(data);
                        var post_no = 0;
                        if( data['meta']['status']==200){

                            $(objList).append('<ul class="tumblr_post_list"></ul>');

                            $.each(data['response']['posts'],function(){
                                post_no = post_no +1;
                                //var post_url = "http://"+o.domain+"/post/"+ this['id'];
                                var post_url = this['post_url'];
                                var post_class = 'postno_'+post_no;

                                $(".tumblr_post_list",objList).append('<li class="tpl_post '+post_class+'"></li>');

                                //タイトルの取得
                                if( this['title'] !== void 0 ){
                                    $('.'+post_class,objList).append('<div class="post_title" ><a href="' + post_url + '" >' + this['title'] + '</a></div>');
                                }
                                else if(this['photos'] === void 0 ){
                                    objDate = new Date(this['timestamp']*1000);
                                    date_str = (objDate.getMonth()+1) +"/" + objDate.getDate() +" ";
                                    date_str += (objDate.getHours()) +":" + objDate.getMinutes();
                                    $('.'+post_class,objList).append('<div class="post_title" ><a href="' + post_url + '" >' + date_str +':'+ this['type'] + '</a></div>');
                                }

                                //画像の取得
                                if( this['photos'] !== void 0 && this['photos'].length > 0 ){
                                    var photo = this['photos'][0];
                                    var alternatePhotos = photo['alt_sizes'];
                                    var alternatesCount = alternatePhotos.length;
                                    var longestEdge = Math.max.apply(
                                        null,
                                        $(alternatePhotos).map(function () {
                                            return Math.max(this['width'], this['height'])
                                        })
                                    );
                                    var thumbnailEdge = Math.min(longestEdge, o.width);
                                    console.log({longestEdge: longestEdge, thumbnailEdge: thumbnailEdge, alternates: alternatePhotos})
                                    for( var no=0; no < alternatesCount; no++ ){
                                        var alternate = alternatePhotos[no];
                                        var longEdge = Math.max(alternate['width'], alternate['height']);
                                        if( alternate['width'] <= thumbnailEdge ){
                                            break;
                                        }
                                    }
                                    console.log({alternatePhoto: alternatePhotos[no]});
                                    var img_url = alternatePhotos[no]['url'];
                                    $('.'+post_class,objList).append('<a href="' + post_url + '"><div class="photo" style="background-image: url(' + img_url + ')"></div></a>');

                                }
                            });

                        }
                    }
                );
            });
        }
    });
})(jQuery);
