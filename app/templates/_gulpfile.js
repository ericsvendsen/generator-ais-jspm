var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    jspm = require('gulp-jspm-build');

// clean
gulp.task('clean', function () {
    return del([
        './src/build/**/*'
    ]);
});

// vendor bundle
gulp.task('vendor', ['clean'], function () {
    return jspm({
        bundles: [
            {
                src: 'app/app.js - [app/**/*]',
                dst: 'vendor.bundle.js'
            }
        ]
    }).pipe(gulp.dest('./src/build'));
});

// app bundle
var appBundle = function () {
    return jspm({
        bundles: [
            {
                src: 'app/app.js - build/vendor.bundle.js',
                dst: 'app.bundle.js'
            }
        ]
    }).pipe(gulp.dest('./src/build'));
};

gulp.task('app', ['vendor'], appBundle);
gulp.task('app-watch', appBundle);

// system js dependencies
gulp.task('system-src', ['app'], function () {
    return gulp.src('./src/jspm_packages/system.js')
        .pipe(gulp.dest('./src/build/jspm_packages'));
});

gulp.task('system-config', ['system-src'], function () {
    return gulp.src('./src/config.js')
        .pipe(gulp.dest('./src/build'));
});

// watch
gulp.task('watch', ['app-watch'], function () {
    browserSync.reload();
});

// static server
gulp.task('browser-sync', ['system-config'], function () {
    browserSync.init({
        server: {
            baseDir: './src/build'
        }
    });

    gulp.watch('./src/app/**/*', ['watch']);
});

gulp.task('default', ['browser-sync'], function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./src/build'));
});