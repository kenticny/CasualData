var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function browserifyBundle(debug) {
    var opts = {
        transform: [reactify],
        debug: false,
        fullPaths: true,
        cache: {},
        packageCache: {}
    };
    if(debug) {
        opts.debug = true;
    }
    return browserify(['public/javascripts/app.js'], opts);
}

var b = watchify(browserifyBundle(true));
b.on('update', browserifyDevTask);
b.on('log', console.log);

function browserifyDevTask() {
    return b.bundle()
          .pipe(source('app.js'))
          .pipe(gulp.dest('public/dist'));
}

gulp.task('browserify', browserifyDevTask);

gulp.task('development', function() {

});

gulp.task('production', function() {

});

gulp.task('default', ['browserify']);