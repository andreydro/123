'use strict'

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const through2 = require('through2').obj;
const fs = require('fs');
const gulpIf = require('gulp-if');
const combine = require('stream-combiner2').obj;

gulp.task('lint', function() {

	let eslintResults = {};

	let cacheFilePath = process.cwd() + '/tmp/lintCache.json';

  try {
  	eslintResults = JSON.parse(fs.readFileSync(cacheFilePath));
  } catch (e) {
  }
	

	return gulp.src('frontend/**/*.js', {read: false})
	  .pipe(gulpIf(
	  	function(file) {
	  	 	return eslintResults[file.path] && eslintResults[file.path].mtime == file.stat.mtime.toJSON();
	  	},
	  	through2(function(file, enc, callback) {
	   	  file.eslint = eslintResults[file.path].eslint;
	  	 	callback(null, file);
	  	}),
	  	combine(
	  		through2(function(file, enc, callback) {
	  			file.contents = fs.readFileSync(file.path);
	  			callback(null, file);
	  		}),
	  		eslint(),
        through2(function(file. enc, callback) {
          eslintResults[file.path] = {
	  		    eslint: file.eslint,
	  		    mtime: file.stat.mtime
	  	    };
	  	    callback(null, file);
	  	 	})
	    )
	  ))  
    .pipe(eslint.format())
    .on('end', function() {
    	fs.writeFileSync(cacheFilePath, JSON.stringify((eslintResults)));
	  	callback();
	  });
});
