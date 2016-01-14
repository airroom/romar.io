'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import cssImport from 'postcss-import';
import cssSimpleVars from 'postcss-simple-vars';
import cssMixins from 'postcss-mixins';

const $ = gulpLoadPlugins();

let processors = [
  cssImport,
  cssSimpleVars,
  cssMixins
];

gulp.task('css', () => {
  return gulp.src('./css/romar.io.css')
  .pipe($.postcss(processors), {
    from: 'css/romar.io.css'
  })
  .pipe(gulp.dest('./dist/css/'));
});
