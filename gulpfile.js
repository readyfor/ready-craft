var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task(
  'sass',
  function () {
    gulp.src('assets/stylesheets/application.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/stylesheets'));
  }
);

gulp.task(
  'watch'
  function () {
    gulp.watch('{assets,scss}/**/*', ['sass']);
  }
);

gulp.task('default', [sass]);
