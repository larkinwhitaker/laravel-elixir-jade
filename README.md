# elixir-jade

Original project by Thomas Creeten, see https://github.com/CREEATION/laravel-elixir-jade

## Installation
----

```sh
$ npm install elixir-jade
```

## Usage
----

Require the extension and call it using mix.jade().

```javascript
var elixir = require('laravel-elixir');
require('elixir-jade');

elixir(function(mix)
{
	mix.jade({
        baseDir: './',
        dest: 'public/mobile/app/',
        pretty: true,
        search: '**/*.jade',
        src: 'angular/jade/',
	    extension: '.html'
    });	
});
```


## Options
----
For Jade's options, see http://jade-lang.com/api/

Compiled Templates are located in your /resources/views/ folder as default.

All other options should be pretty straight forward.

These are the default options:

```javascript
{
    baseDir: './resources',
    dest: '/views/',
    pretty: true,
    search: '**/*.jade',
    src: '/jade/',
    extension: '.html'
}
```

Run gulp.

```sh
$ gulp
```