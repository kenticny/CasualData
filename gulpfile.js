var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    var bundle = browserify(['public/javascripts/app.js'], {
        transform: [reactify],
        debug: true,
        fullPaths: true
    }).bundle();

    return bundle
          .pipe(source('app.js'))
          .pipe(gulp.dest('public/dist'));
});

gulp.task('development', function() {

});

gulp.task('production', function() {

});

gulp.task('default', ['browserify']);