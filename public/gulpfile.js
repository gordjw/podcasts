var gulp = require('gulp'),
    gutil = require('gulp-util'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify');
    //browserSync = require('browser-sync').create();

var paths = {
    ALL: ['src/js/*.js', 'src/js/**/*.js'],
    JS: ['src/js/*.js', 'src/js/**/*.js'],
    OUT: 'build.js',
    DEST_BUILD: 'dist/lib',
    DEST: 'dist',
    ENTRY_POINT: __dirname + '/src/js/main.js'
};

console.log(paths);

gulp.task('default', ['copy-static', 'watch']);

// Copies the static file to build folder
gulp.task('copy-static', function() {
	return true;
});

// Build the app
gulp.task('build', function() {

    return browserify({
        extensions: ['js'],
        entries: paths.ENTRY_POINT,
        debug: true
    })
	.transform(babelify.configure({
		presets: ['react']
	}))
        .bundle()
        .on('error', gutil.log)
        .pipe(source(paths.OUT))
        .pipe(gulp.dest(paths.DEST_BUILD));
});

// Watch for files and do the build
gulp.task('watch', ['copy-static'], function() {
    gulp.watch(paths.ALL, ['copy-static']);

    var watcher = watchify(browserify({
        entries: paths.ENTRY_POINT,
        debug: true,
        cache: {},
        packageCache: {}
    }))
	.transform(babelify, {presets: ['react']});

    watcher.on('update', function(){
            watcher.bundle()
            .on('error', gutil.log)
            .pipe(source(paths.OUT))
            .pipe(gulp.dest(paths.DEST_BUILD));
            //.pipe(browserSync.reload({stream: true}));

        console.log('Updated');
    })
        .bundle()
        .pipe(source(paths.OUT))
        .pipe(gulp.dest(paths.DEST_BUILD));

/*
    browserSync.init({
        server: {
            baseDir: paths.DEST
        }
    });
*/
});

