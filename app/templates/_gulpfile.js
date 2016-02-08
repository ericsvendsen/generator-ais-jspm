var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create();

// clean
gulp.task('clean', function () {
    return del([
        './build/**/*'
    ]);
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('./app/**/*')
        .pipe(gulp.dest('./build'));
});


gulp.task('js-watch', ['copy'], browserSync.reload);

// Static server
gulp.task('browser-sync', ['copy'], function () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    gulp.watch("app/modules/**/*.js", ['js-watch']);
});

gulp.task('default', ['browser-sync']);