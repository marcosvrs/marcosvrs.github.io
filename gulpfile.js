(function () {
    'use strict';

    var lessFiles = 'less/**/*.less',
        cssDest = 'public/css',
        jsFiles = 'js/**/*.js',
        jsModules = [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-touch/angular-touch.js',
            //'node_modules/angular-cookie/angular-cookie.js',
            //'node_modules/angular-ui-scrollpoint/dist/scrollpoint.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'],
        jsName = 'marcosvrs',
        jsDest = 'public/js',
        imgFiles = ['img/**/*', '!img/**/*.db'],
        imgDest = 'public/img';

    const gulp = require('gulp'),
        //closureCompiler = require('gulp-closure-compiler'),
        $ = require('gulp-load-plugins')();

    gulp.task('less', function () {
        gulp.src(lessFiles)
            .pipe($.rename({
                suffix: '.min'
            }))
            .pipe($.sourcemaps.init())
            .pipe($.less())
            .pipe($.cssnano())
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(cssDest));
    });

    gulp.task('lint', function () {
        gulp.src(jsModules)
            .pipe($.eslint({ fix: true }))
            .pipe($.eslint.format())
        //.pipe($.eslint.failAfterError())
    });

    gulp.task('js', function () {
        jsModules.push(jsFiles);
        gulp.src(jsModules)
            .pipe($.sourcemaps.init())
            .pipe($.concat(jsName + '.js'))
            .pipe($.rename({
                suffix: '.min'
            }))
            /*.pipe(closureCompiler({
                compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
                fileName: jsName + '.min.js',
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                maxBuffer: 4000,
                compilerFlags: {
                    angular_pass: true,
                    externs: jsModules
                },
                continueWithWarnings: true
            }))*/
            .pipe($.uglify({
                mangle: false,
                preserveComments: 'license'
            }))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(jsDest));
    });

    gulp.task('images', () =>
        gulp.src(imgFiles)
            .pipe($.image())
            .pipe(gulp.dest(imgDest))
    );

    gulp.task('server', function () {
        $.nodemon({
            script: 'server.js'
        });
    });

    gulp.task('default', ['lint', 'js', 'less', 'images', 'server'], function () {
        gulp.watch(jsFiles, ['lint', 'js']);
        gulp.watch(lessFiles, ['less']);
        gulp.watch(imgFiles, ['images']);
    });
})();