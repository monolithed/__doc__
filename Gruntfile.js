// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Tasks for the __doc__
 *
 * @author Alexander Guinness <monolithed@gmail.com>
 * @license MIT
*/

module.exports = function (grunt) {
	'use strict';

	grunt.config.init({
		pkg: grunt.file.readJSON('package.json'),
		name: '<%= pkg.config.name %>',

		version: {
			options: {
				prefix: '@version\\s*'
			},

			src: '<%= name %>.js',
			min: '<%= name %>.min.js'
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			files: ['Gruntfile.js', '<%= name %>.js', 'test/**/*.js']
		},

		devUpdate: {
			main: {
				options: {
					updateType: 'report'
				}
			}
		},

		exec: {
			qunit: {
				command: 'build/tests.js'
			},

			export: {
				command: 'build/export.sh'
			},

			minify: {
				command: 'build/minify.sh'
			},

			shrinkwrap: {
				command: 'npm shrinkwrap --dev'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-dev-update');
	grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('export', 'exec:export');
	grunt.registerTask('minify', 'exec:minify');

	grunt.registerTask('test', ['jshint', 'exec:shrinkwrap --force', 'exec:qunit']);
	grunt.registerTask('dev', ['default', 'devUpdate:main', 'minify']);
	grunt.registerTask('default', ['version', 'test']);
};
