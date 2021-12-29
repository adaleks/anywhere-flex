'use strict';

let gulp = require('gulp');

gulp.task('copy-lib', function () {
    return gulp
        .src(['src/styles/lib/**/*', 'docs/lib/README.md', 'package.json'])
        .pipe(gulp.dest('dist/lib'));
});
