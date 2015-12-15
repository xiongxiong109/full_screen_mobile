module.exports = function(grunt) {
 // 项目配置(任务配置)
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  /*--------------------------------
   *build文件压缩相关
   ---------------------------------*/
   imagemin:{//图片压缩
    dist:{
      options:{
        optimizationLevel:3
      }
    },
    files:{
      'dist/img/*.jpg':'lib/img/*.jpg',
      'dist/img/*.png':'lib/img/*.png',
      'dist/img/*.gif':'lib/img/*.gif',
    }
   },
   uglify:{//js压缩
    target:{
      files:{
        'dist/js/lib.min.js':['dist/js/lib.js']
      }
    }
   }, 
   concat:{//js合并,要注意js文件合并时有一定的顺序要求
    dist:{
      src:['lib/js/zepto.min.js','lib/js/audio.js','lib/js/preload.js','lib/js/resize.js','lib/js/bw.js','lib/js/swiper.js','lib/js/scroll.js'],
      dest:'dist/js/lib.js'
    }
   },
   jshint:{//js语法检测
    beforeconcat:['lib/js/audio.js','lib/js/preload.js','lib/js/resize.js','lib/js/bw.js','lib/js/swiper.js']
   },
   cssmin:{
    target:{
      files:[
        {
          expand:true,
          src:['lib/css/*.css'],
          dest:'dist/css',
          ext:'.min.css'
        },
        {
          expand:true,
          src:['example/**/css/*.css'],
          dest:'dist/css',
          ext:'.min.css'
        }
      ]
    }
   },
  /*--------------------------------
  *启动服务相关(这里的livereload使用了chrome浏览器的插件)
  ---------------------------------*/
  connect:{//web服务
  	livereload:{
  		options:{
  			port:8000,
  			base:['.'],
  			hostname:'localhost'
  		}
  	}
  },
  watch: {//文件监听
   client: {
    files: ['example/**/*.html', 'example/**/css/*', 'example/**/js/*', 'example/**/img/*','lib/**/*'],
    options:{
      livereload:true
    }
   }
  }
 });
  /*压缩优化指令*/
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('build',['imagemin','cssmin','jshint','concat','uglify']);

 //web livereload指令
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-watch');
 // 自定义任务
 grunt.registerTask('live', ['connect','watch']);
};