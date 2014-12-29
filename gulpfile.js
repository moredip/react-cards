var gulp = require('gulp'),
    _ = require('underscore'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    del = require('del'),
    streamqueue = require('streamqueue'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    mocha = require('gulp-mocha');

var BUILD_DIR = 'build',
    FONT_AWESOME_INCLUDE_PATH = 'node_modules/font-awesome/scss';

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

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

gulp.task('test', function() {
  gulp.src(['tests/setup.js','tests/unit/**/*.js'],{read:false})
    .pipe(mocha({
      ui: 'bdd',
      useColors: false,
    }))
    .on("error", handleError);
});

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass({
          includePaths: require('node-bourbon').includePaths.concat( FONT_AWESOME_INCLUDE_PATH )
        }))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', ['default'], function(){
  var watchOpts = {debounceDelay:2000}, // workaround for editors saving file twice: http://stackoverflow.com/questions/21608480/gulp-js-watch-task-runs-twice-when-saving-files
      watchTargets = {
    './js/**/*': ['test','browserify'],
    './tests/**/*': ['test'],
    './scss/*.scss': ['sass'],
    './index.html': ['copy']
  };
  
  _.each(watchTargets, function(tasks,glob){
    gulp.watch( glob, watchOpts, tasks );
  });
});

gulp.task('default', ['test','copy','browserify','sass']);
