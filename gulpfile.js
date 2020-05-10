const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
const sass = require('gulp-sass');


function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function mincss() {

  return src("./*.css")
  
  .pipe(rename({suffix: ".min"}))
  
  .pipe(cleanCSS())
  
  .pipe(dest("app/css"));
  
  };

  function serveSass() {
    return src("*./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};
  exports.serve = bs;

