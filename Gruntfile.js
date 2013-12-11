// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Tasks for the __doc__
 *
 * @author Alexander Guinness <monolithed@gmail.com>
 * @see https://github.com/kof/node-qunit
 * @license MIT
 *
 * date: 24.11.13 / 8:25
 * version 0.0.2
*/

module.exports = function (grunt) {
	'use strict';

	grunt.config.init({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			files: ['Gruntfile.js', '__doc__.js', 'test/**/*.js']
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
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('export', 'exec:export');
	grunt.registerTask('minify', 'exec:minify');

	grunt.registerTask('test', ['jshint', 'exec:qunit']);
	grunt.registerTask('default', 'test');
};
