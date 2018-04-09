'use strict';
 
var gulp = require('gulp'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create(),
path = require("path"),
watch = require('gulp-watch'),
runs = require('run-sequence'),
cssnano = require('gulp-cssnano');

var src = path.join(__dirname, 'styles-master/main.scss');
var dest = path.join(__dirname, 'styles');
var destDev = path.join(__dirname, 'static');
var cssSrc = path.join(__dirname, 'styles-master/**/*.@(scss|css)');

gulp.task('sass', function() {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sass({ includePaths: 'node_modules/' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ['> 0%'] })]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(destDev))
    .pipe(browserSync.stream());
})

gulp.task('sass:min', function() {
  return gulp.src(src)
    .pipe(concat('main.css'))
    .pipe(sass({ includePaths: 'node_modules/', outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer({ browsers: ['> 0%'] })]))
    .pipe(cssnano())
    .pipe(gulp.dest(dest));
})
 
gulp.task('sass-watch', function() {
  watch(cssSrc, function() { 
    runs('sass', function() {
      browserSync.reload()
    }); 
  });
});

// dev mode
gulp.task('default', ['sass','sass-watch'], function() {
  browserSync.init({ 
    proxy: {
      target: "http://localhost:4000",
      ws: true
  }
  });
});

// prod mode - minify files
gulp.task('build', function() {
    runs('sass:min');
});