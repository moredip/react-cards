var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    del = require('del'),
    streamqueue = require('streamqueue');


var BUILD_DIR = 'build';


gulp.task('clean', function(cb){
  del([BUILD_DIR],cb);
});

gulp.task('copy', function () {
  var inputs = [
    'node_modules/react/dist/react.min.js',
    'node_modules/react/dist/react.js',
    'node_modules/underscore/underscore-min.js',
    'node_modules/underscore/underscore.js',
    'index.html'
  ];

  gulp.src(inputs)
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-js', function () {
  var js = gulp.src(['js/init.js','js/**/*.js']);
  var jsx = gulp.src('js/**/*.jsx')
    .pipe(react());

    streamqueue( {objectMode:true}, js, jsx )
      .pipe(concat('app.js'))
      .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', ['default'], function(){
  //gulp.watch(['js'], ['build-js']);
  gulp.watch(['index.html'], ['copy']);
});

gulp.task('default', ['copy','build-js']);
