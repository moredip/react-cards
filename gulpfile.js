var gulp = require('gulp'),
    path = require('path'),
    _ = require('underscore'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    mocha = require('gulp-mocha'),
    shell = require('gulp-shell');

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

var createBrowserifyTask = function(taskName, entryFile){
  gulp.task(taskName, function() {
    var bundler = browserify({
        entries: [entryFile],
        extensions: ['.jsx'],
        debug: true
      });
    bundler.transform('reactify');

    bundler.bundle()
      .pipe(source(path.basename(entryFile)))
      .pipe(gulp.dest(BUILD_DIR));
  });
};

createBrowserifyTask('browserify','./js/app.js');
createBrowserifyTask('build-feature-test-harness','./tests/feature/app_test_harness.js');

gulp.task('unit-test', function() {
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

gulp.task('build', ['copy','browserify','sass']);

gulp.task('watch', ['default'], function(){
  var watchOpts = {debounceDelay:2000}, // workaround for editors saving file twice: http://stackoverflow.com/questions/21608480/gulp-js-watch-task-runs-twice-when-saving-files
      watchTargets = {
    './js/**/*': ['unit-test','browserify','build-feature-test-harness'],
    './tests/unit/**/*': ['unit-test'],
    './scss/*.scss': ['sass'],
    './index.html': ['copy']
  };
  
  _.each(watchTargets, function(tasks,glob){
    gulp.watch( glob, watchOpts, tasks );
  });
});


gulp.task('default', ['clean','unit-test','build']);
