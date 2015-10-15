var elixir = require('laravel-elixir'),
	gulp = require('gulp'),
	jade = require('gulp-jade'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	 _ = require('underscore');


/*
 |----------------------------------------------------------------
 | Gulp Jade Wrapper
 |----------------------------------------------------------------
 |
 | This task will compile your Jade files into your views folder.
 | You can make use of Blade variables in your jade files as well.
 | Examples see README.md
 |
 */

var Task = elixir.Task;

elixir.extend('jade', function (options) 
{
	options = _.extend({
        baseDir: './resources',
        dest: '/views/',
        pretty: false,
        search: '**/*.jade',
        src: '/jade/',
        extension: '.html'
    }, options);

    var gulpSrc = options.baseDir + options.src + options.search;

    var jadeOptions = _.pick(
        options,
        'filename',
        'doctype',
        'pretty',
        'self',
        'debug',
        'compileDebug',
        'compiler'
    );

	new Task('jade', function() 
	{
        return gulp.src(gulpSrc)
            .pipe(plumber())
            .pipe(jade(jadeOptions))
            .pipe(rename(function (path) {
                path.extname = options.extension;
            }))
            .pipe(gulp.dest(options.baseDir + options.dest))
            .pipe(notify({
                title: 'Laravel Elixir',
                message: 'Jade templates compiled',
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }));
    })
    .watch([ options.baseDir + options.src + options.search ]);
});