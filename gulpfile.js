'use strict';

let gulp = require('gulp');
let clean = require('gulp-clean');

gulp.task('copy-lib', function () {
    return gulp
        .src(['docs/lib/README.md', 'package.json'])
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('clean-dist', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

