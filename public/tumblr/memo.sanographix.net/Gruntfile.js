module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

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
                    "build/css/style.css" : "css/style.less",
                }
            }
        },

        // js-concat
        concat: {
            dist: {
                src: 'js/libs/*.js',
                dest: 'js/scripts.js'
            }
        },

        // js-uglify
        uglify: {
            build: {
                src: 'js/scripts.js',
                dest: 'build/js/scripts.min.js'
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
            },
            scripts : {
                files : ["js/libs/*.js"],
                tasks : ['concat', 'uglify']
            }
        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['watch']);

};