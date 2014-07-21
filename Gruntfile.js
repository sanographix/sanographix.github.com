module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({

        less : {
            // 作業のラベルは"dist"にしてみます
            dist : {
                // オプションの指定
                options : {
                    compress : true
                },
                // コンパイルするファイルの指定。左辺には出力先のCSSファイル、右辺には元となるLessファイルへのパス
                files : {
                    "loveliver-tee/css/style.css" : "loveliver-tee/css/style.less",
                    "public/tumblr/reblographix2/css/style.css" : "public/tumblr/reblographix2/css/style.less",
                    "public/tumblr/illustfolio/1.3.x/css/style.css" : "public/tumblr/illustfolio/1.3.x/css/style.less",
                    "public/tumblr/zen/2.x/css/style.css" : "public/tumblr/zen/2.x/css/style.less",
                    "public/tumblr/apollo/css/style.css" : "public/tumblr/apollo/css/style.less",
                    "public/tumblr/tokusetsu2/css/style.css" : "public/tumblr/tokusetsu2/css/style.less"
                }
            }
        },

        watch : {
            // ラベルは"less"にしてみます
            less : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "**/*.less"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    "less:dist"
                ]
            }
        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['less:dist','watch']);

};