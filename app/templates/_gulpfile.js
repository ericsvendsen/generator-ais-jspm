'use strict';

const gulp = require('gulp');
const jspm = require('jspm');
const del = require('del');
const browserSync = require('browser-sync').create();
const DevBuilder = require('jspm-dev-builder');

// clean
gulp.task('clean', () => {
    return del([
        './build/**/*'
    ]);
});

// vendor assets
gulp.task('vendor-fonts', ['clean'], () => {
    return gulp.src(['./src/jspm_packages/**/font-awesome*/fonts/**','./src/jspm_packages/**/twbs/bootstrap*/fonts/**'])
        .pipe(gulp.dest('./build/jspm_packages'));
});

gulp.task('system-src', ['clean'], () => {
    return gulp.src('./src/jspm_packages/system.js')
        .pipe(gulp.dest('./build/jspm_packages'));
});

gulp.task('system-config', ['clean'], () => {
    return gulp.src('./src/config.js')
        .pipe(gulp.dest('./build'));
});

gulp.task('vendor-assets', ['vendor-fonts', 'system-src', 'system-config']);

// app
let appDevBuilder = new DevBuilder({
    jspm: require('jspm'), // so you can use your local version of jspm
    expression: 'app/app.js', // path to your app's entry point
    outLoc: 'build/app.bundle.js', // where you want the output file
    logPrefix: 'jspm-app', // put at the beginning of log messages from dev builder
    buildOptions: {
        sfx: false, // if the build should be self executing (please see note below on Self Executing Builds)
        // below options are passed straight through to the builder
        minify: false,
        mangle: false,
        sourceMaps: true,
        lowResSourceMaps: false
    }
});

gulp.task('build', ['vendor-assets'], () => appDevBuilder.build());

// static server
gulp.task('server', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: './build',
            routes: {
                '/src': './src' // serving files from build, so tell sourcemaps how to get to src
            }
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