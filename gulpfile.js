const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var cleanCSS     = require('gulp-clean-css');
var rename       = require("gulp-rename");

gulp.task('hello', function(done){
  console.log('Привет');
  done();
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('mincss', function() {

  return gulp.src("./*.css")
  
  .pipe(rename({suffix: ".min"}))
  
  .pipe(cleanCSS())
  
  .pipe(gulp.dest("app/css"));
  
  })
  

