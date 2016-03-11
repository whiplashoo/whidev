var gulp = require('gulp'),
minifycss = require('gulp-minify-css'),
jshint = require('gulp-jshint'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
livereload = require('gulp-livereload'),
del = require('del');

gulp.task('default', function() {
    gulp.start('styles','scripts');
});

gulp.task('styles', function() {
  return gulp.src('css/*.css')
  .pipe(minifycss({compatibility: 'ie8'}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css/'));
});
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/js'));
});
gulp.task('watch', function() {

  // Watch .css files
  gulp.watch('css/*.css', ['styles']);

  // Watch .js files
  gulp.watch('js/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);

});