let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename');

gulp.task('scss', () => {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('fonts', () => {
  return gulp.src('./app/fonts/**/*.(ttf|otf)')
    .pipe(gulp.dest)
});

gulp.task('html', () => {
  return gulp.src('./app/*.html')
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', () => {
  return gulp.src('./app/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', () => {
  return gulp.src('./app/js/main.js')
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: './app/',
    },
  });
});


gulp.task('watch', () => {
  gulp.watch('./app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch("./app/*.html", gulp.parallel('html'));
  gulp.watch('./app/js/*.js', gulp.parallel('script'));
});



gulp.task('default', gulp.parallel('browser-sync', 'watch'));