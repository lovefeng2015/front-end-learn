
const gulp = require('gulp');
const $=require('gulp-load-plugins');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const less=require('gulp-less');
const cssClean=require('gulp-clean-css');
const htmlMin=require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const open=require('open');
 
// gulp.task('scripts', function() {
//   return gulp.src('src/js/*.js')
//     .pipe(concat('build.js'))
//     .pipe(gulp.dest('dist/js/'));
// });
//注册合并压缩js的任务
exports.js = function() {
    return gulp.src('src/js/*.js')//找目标原文件 将原文件的数据读取到gulp的内存中
    .pipe(concat('build.js'))//合并js文件
    .pipe(gulp.dest('dist/js/'))//临时输出
    .pipe(uglify())//压缩js文件
    .pipe(rename({suffix:'.min'}))//重命名
    .pipe(gulp.dest('dist/js/'))//输出
    .pipe(livereload())
    .pipe(connect.reload());
  }
//注册编译less的任务
  exports.less=function () {
      return gulp.src('src/less/*.less')
      .pipe(less())//将less文件转换为css文件
      .pipe(gulp.dest('src/css/')) 
  }
  function lessTask() {
    return gulp.src('src/less/*.less')
    .pipe(less())//将less文件转换为css文件
    .pipe(gulp.dest('src/css/')) 
    .pipe(livereload())
    .pipe(connect.reload());
  }

  exports.css=function () {
    return gulp.src('src/css/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({suffix:'.min'}))
    .pipe(cssClean({compatibility:'ie8'}))
    .pipe(gulp.dest('dist/css/')) 
}
function cssTask() {
  return gulp.src('src/css/*.css')
  .pipe(concat('build.css'))
  .pipe(rename({suffix:'.min'}))
  .pipe(cssClean({compatibility:'ie8'}))
  .pipe(gulp.dest('dist/css/')) 
  .pipe(livereload())
  .pipe(connect.reload());
}
exports.htmlMin=function () {
  return gulp.src('index.html')
  .pipe(htmlMin({collapseWhitespace:true}))
  .pipe(gulp.dest('dist/'))
}
function html() {
  return gulp.src('index.html')
  .pipe(htmlMin({collapseWhitespace:true}))
  .pipe(gulp.dest('dist/'))
  .pipe(livereload())
  .pipe(connect.reload());
}
// function  watch() {
  
// }

exports.watch= function () {
  exports.default();
  livereload.listen();
  gulp.watch('src/js/*.js',exports.js)
  gulp.watch('src/less/*.less',gulp.series(lessTask,cssTask))
  gulp.watch('src/css/*.css',cssTask)
  
};

exports.server= function () {
  exports.default();
  connect.server({
    root:'dist/',
    livereload:true,
    port:5000
  })
  open('http://localhost:5000');
  gulp.watch('src/js/*.js',exports.js)
  gulp.watch('src/less/*.less',gulp.series(lessTask,cssTask))
  gulp.watch('src/css/*.css',cssTask)
  
};
exports.default=gulp.parallel(exports.js,html,gulp.series(exports.less,exports.css));

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask;