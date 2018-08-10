const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./css/*.*(scss|sass|css)')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
     }))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function() {
  gulp.watch('./css/*.*(scss|sass|css)', ['sass']); 
})