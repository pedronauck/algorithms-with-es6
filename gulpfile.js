var gulp = require('gulp');
var to5 = require('gulp-6to5');

gulp.task('build', function () {
  var paths = [
    'utils/*.js',
    'src/**/*.js',
    '!**/__tests__/*.js',
    '!utils/es6-transformer.js'
  ];

  gulp.src(paths)
    .pipe(to5())
    .pipe(gulp.dest('compiled'));
});
