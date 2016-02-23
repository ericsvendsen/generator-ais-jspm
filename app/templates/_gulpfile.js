'use strict';

const gulp = require('gulp');
const jspm = require('jspm');
const del = require('del');
const browserSync = require('browser-sync').create();
const DevBuilder = require('jspm-dev-builder');
const exec = require('child_process').exec;
const inject = require('gulp-inject');
const p = require('./package.json');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const eslint = require('gulp-eslint');

const paths = {
    build: 'build',
    dist: 'dist',
    src: 'src',
    deploy: 'deploy',
    fonts: ['./src/jspm_packages/**/font-awesome*/fonts/**','./src/jspm_packages/**/twbs/bootstrap*/fonts/**']
};

// clean
gulp.task('clean-build', () => {
    return del([
        `./${paths.build}/**/*`
    ]);
});

gulp.task('clean-dist', () => {
    return del([
        `./${paths.dist}/**/*`
    ]);
});

// code linting
gulp.task('lint', ['clean-build'], () => {
    return gulp.src([`./${paths.src}/app/**/*.js`,`!./${paths.src}/app/app.js`])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// vendor assets
gulp.task('vendor-fonts-build', ['lint'], () => {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(`./${paths.build}/jspm_packages`));
});

gulp.task('system-src', ['lint'], () => {
    return gulp.src(`./${paths.src}/jspm_packages/system.js`)
        .pipe(gulp.dest(`./${paths.build}/jspm_packages`));
});

gulp.task('system-config', ['lint'], () => {
    return gulp.src([`./${paths.src}/config.js`,`./${paths.src}/import.js`])
        .pipe(gulp.dest(`./${paths.build}`));
});

gulp.task('vendor-assets', ['vendor-fonts-build', 'system-src', 'system-config']);

// app
let appDevBuilder = new DevBuilder({
    jspm: require('jspm'), // so you can use your local version of jspm
    expression: 'app/app.js', // path to your app's entry point
    outLoc: `${paths.build}/app.bundle.js`, // where you want the output file
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

// dev server
gulp.task('serve-dev', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: `./${paths.build}`,
            routes: {
                '/src': `./${paths.src}` // serving files from build, so tell sourcemaps how to get to src
            }
        }
    });

    return gulp.watch(`./${paths.src}/app/**/*`).on('change', (result) => {
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

// default task
gulp.task('default', ['serve-dev'], () => {
    return gulp.src(`./${paths.src}/index.html`)
        .pipe(inject(gulp.src([
            `./${paths.build}/jspm_packages/system.js`,
            `./${paths.build}/config.js`,
            `./${paths.build}/app.bundle.js`,
            `./${paths.build}/import.js`
        ], { read: false }), { starttag: '<!-- inject:dev -->', ignorePath: paths.build, addRootSlash: false }))
        .pipe(gulp.dest(`./${paths.build}`));
});




// dist
gulp.task('vendor-fonts-dist', ['clean-dist'], () => {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(`./${paths.dist}/jspm_packages`));
});

gulp.task('dist-bundle', ['clean-dist'], (cb) => {
    return exec(`jspm bundle-sfx \'app/app.js\' ./${paths.dist}/app.bundle.js --skip-source-maps -m`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('dist-inject', ['dist-bundle'], () => {
    return gulp.src(`./${paths.src}/index.html`)
        .pipe(inject(gulp.src(`./${paths.dist}/app.bundle.js`, { read: false }), { starttag: '<!-- inject:dist -->', ignorePath: 'dist', addRootSlash: false }))
        .pipe(gulp.dest(`./${paths.dist}`));
});

gulp.task('dist', ['dist-inject', 'vendor-fonts-dist']);

// dist server
gulp.task('serve-dist', ['dist'], () => {
    browserSync.init({
        server: {
            baseDir: `./${paths.dist}`
        }
    });
});




// deploy
gulp.task('deploy-compress', ['dist'], () => {
    return gulp.src(`./${paths.dist}/**/*`)
        .pipe(gulp.dest('./<%=appId%>')) // this will be the name of the directory inside the archive
        .pipe(tar('<%=appId%>' + p.version + '.tar'))
        .pipe(gzip())
        .pipe(gulp.dest(`./${paths.deploy}`));
});

gulp.task('deploy', ['deploy-compress'], () => {
    return del([
        './<%=appId%>'
    ]);
});