var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin  = require('gulp-cssmin');
var jsmin   = require('gulp-uglify');

var html_dir = '../html/minify/sample/';
var css_dir  = '../html/minify/sample/';
var js_dir   = '../html/minify/sample/';

gulp.task('minify_html', function() {
	return gulp.src(html_dir  + '*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(html_dir))
	;
});

gulp.task('minify_css', function() {
	return gulp.src(css_dir + '*.css')
		.pipe(cssmin())
		.pipe(gulp.dest(css_dir))
	;
});

gulp.task('minify_js', function() {
	return gulp.src(js_dir + '*.js')
		.pipe(jsmin({preserveComments: 'some'}))
		.pipe(gulp.dest(js_dir))
	;
});

gulp.task('minify', ['minify_html','minify_css', 'minify_js']);
