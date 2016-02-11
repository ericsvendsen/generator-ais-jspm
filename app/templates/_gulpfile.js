var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    exec = require('child_process').exec,
    rename = require('gulp-rename'),
    gulp_jspm = require('gulp-jspm');

// clean
gulp.task('clean', function () {
    return del([
        './build/**/*'
    ]);
});

// html
gulp.task('html', ['clean'], function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build'));
});

// vendor
gulp.task('bundle-vendor', ['html'], function (cb) {
    return exec('jspm bundle \'app/app - [app/**/*]\' src/vendor.bundle.js -i --skip-source-maps', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
//gulp.task('bundle-vendor', ['html'], function () {
//    return gulp.src('app/app.js')
//        .pipe(gulp_jspm({
//            arithmetic: '- [app/**/*]',
//            inject: true
//        }))
//        .pipe(rename('vendor.bundle.js'))
//        .pipe(gulp.dest('./build'));
//});

// app
gulp.task('bundle-app', ['bundle-vendor'], function (cb) {
    return exec('jspm bundle \'app/app - vendor.bundle.js\' src/app.bundle.js -i --skip-source-maps', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
//gulp.task('bundle-app', ['bundle-vendor'], function () {
//    return gulp.src('app/app.js')
//        .pipe(gulp_jspm({
//            arithmetic: '- ./build/vendor.bundle.js',
//            inject: true
//        }))
//        .pipe(gulp.dest('./build'));
//});

gulp.task('copy-bundles', ['bundle-app'], function () {
    return gulp.src(['./src/app.bundle.js','./src/vendor.bundle.js'])
        .pipe(gulp.dest('./build'));
});

gulp.task('delete-bundles', ['copy-bundles'], function () {
    return del([
        './src/app.bundle.js',
        './src/vendor.bundle.js'
    ]);
});

gulp.task('jspm', ['delete-bundles'], function () {
    return gulp.src('./src/jspm_packages/system.js')
        .pipe(gulp.dest('./build/jspm_packages'));
});

gulp.task('system-config', ['jspm'], function () {
    return gulp.src('./src/config.js')
        .pipe(gulp.dest('./build'));
});

// watch
gulp.task('watch', ['bundle-app'], browserSync.reload);

// Static server
gulp.task('browser-sync', ['system-config'], function () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch('./app/**/*', ['watch']);
});

gulp.task('default', ['browser-sync']);