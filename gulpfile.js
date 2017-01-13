/*eslint-env node */
'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  eslintRc = require('./.eslintrc');

gulp.task('lint', function () {
  // Note: To have the process exit with an error code (1) on
  //  lint error, return the stream and pipe to failOnError last.
  return gulp.src([
    './lib/job.js',
    './lib/queue.js',
    './lib/timer-manager.js',
    './test/**/*.js'
  ])
    .pipe(eslint(eslintRc))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
  // This will only run if the lint task is successful...
});
