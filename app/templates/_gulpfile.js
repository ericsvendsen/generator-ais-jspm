'use strict';

const gulp = require('gulp');
const jspm = require('jspm');
const del = require('del');
const browserSync = require('browser-sync').create();
const devBuilder = require('jspm-dev-builder');

// clean
gulp.task('clean', () => {
    return del([
        './build/**/*'
    ]);
});

// system js dependencies
gulp.task('system-src', ['clean'], () => {
    return gulp.src('./src/jspm_packages/system.js')
        .pipe(gulp.dest('./build/jspm_packages'));
});

gulp.task('system-config', ['clean'], () => {
    return gulp.src('./src/config.js')
        .pipe(gulp.dest('./build'));
});

// app
let appDevBuilder = new devBuilder({
    jspm: require('jspm'), // so you can use your local version of jspm
    expression: 'app/app.js', // path to your app's entry point
    outLoc: 'build/app.bundle.js', // where you want the output file
    logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
    buildOptions: {
        sfx: false, // if the build should be self executing (please see note below on Self Executing Builds)
        // below options are passed straight through to the builder
        // the values shown are the defaults
        minify: false,
        mangle: false,
        sourceMaps: false,
        lowResSourceMaps: false
    }
});

gulp.task('build', ['system-src', 'system-config'], () => appDevBuilder.build());

// static server
gulp.task('server', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });

    return gulp.watch('./src/app/**/*').on('change', (result) => {
        let ext = result.path.split('.').pop();
        let filePath = '';
        if (ext === 'html') {
            filePath = result.path + '!text';
        } else if (ext === 'scss') {
            filePath = result.path + '!';
        } else {
            filePath = result.path;
        }
        appDevBuilder.build(filePath).then(() => browserSync.reload());
    });
});

gulp.task('default', ['server'], () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'));
});