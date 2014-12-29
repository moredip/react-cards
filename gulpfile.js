var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    del = require('del'),
    streamqueue = require('streamqueue'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify');

var BUILD_DIR = 'build',
    FONT_AWESOME_INCLUDE_PATH = 'node_modules/font-awesome/scss';

gulp.task('clean', function(cb){
  del([BUILD_DIR],cb);
});

gulp.task('copy', function () {
  var inputs = [
    'node_modules/react/dist/react-with-addons.*',
    'node_modules/underscore/underscore-min.js',
    'node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone-min.*',
    'index.html'
  ];

  gulp.src(inputs)
    .pipe(gulp.dest(BUILD_DIR));

  gulp.src(['node_modules/font-awesome/fonts/**/*'], {base: "node_modules/font-awesome"})
    .pipe(gulp.dest(BUILD_DIR));
});


gulp.task('browserify', function() {
  var bundler = browserify({
      entries: ['./js/app.js'],
      extensions: ['.jsx'],
      debug: true
    });
  bundler.transform('reactify');

  bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass({
          includePaths: require('node-bourbon').includePaths.concat( FONT_AWESOME_INCLUDE_PATH )
        }))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', ['default'], function(){
  gulp.watch(['js/**/*'], ['browserify']);
  gulp.watch(['scss/*.scss'], ['sass']);
  gulp.watch(['index.html'], ['copy']);
});

gulp.task('default', ['copy','browserify','sass']);
