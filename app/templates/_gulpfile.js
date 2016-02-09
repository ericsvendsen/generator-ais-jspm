var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    gulp_jspm = require('gulp-jspm'),
    sourcemaps = require('gulp-sourcemaps');

// clean
gulp.task('clean', function () {
    return del([
        './build/**/*'
    ]);
});

gulp.task('html', ['clean'], function () {
    return gulp.src('./app/modules/**/*.html')
        .pipe(gulp.dest('./build/modules'));
});

gulp.task('bundle-build', ['html'], function () {
    return gulp.src('./app/modules/app.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp_jspm({selfExecutingBundle: true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['bundle-build'], browserSync.reload);

// Static server
gulp.task('browser-sync', ['bundle-build'], function () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch('./app/modules/**/*', ['watch']);
});

gulp.task('default', ['browser-sync'], function () {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'));
});