var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    del = require('del');


var BUILD_DIR = 'build';


gulp.task('clean', function(cb){
  del([BUILD_DIR],cb);
});

gulp.task('copy', function () {
  var inputs = [
    'node_modules/react/dist/react.min.js',
    'node_modules/react/dist/react.js',
    'index.html'
  ];

  gulp.src(inputs)
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-js', function () {
  gulp.src('js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(BUILD_DIR));
  
});

gulp.task('default', ['copy','build-js']);
