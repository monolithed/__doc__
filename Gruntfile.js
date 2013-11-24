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


/**
 * TODO: tasks for
 *   gem install travis-lint
 *   gem list travis-lint
 *   gem --version
 *   ruby --version
 *   travis-lint
 */

'use strict';

module.exports = function (grunt) {
	grunt.config.init({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			files: ['Gruntfile.js', '__doc__.js', 'test/**/*.js']
		},

		exec: {
			qunit: {
				command: 'node node_modules/qunit/bin/cli.js ' +
					'--log "{ summary: true, errors: true }" ' +
					'--code ./__doc__.js ' +
					'--tests ./tests/__doc__.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('qunit', 'exec:qunit');
	grunt.registerTask('test', ['jshint', 'exec:qunit']);
	grunt.registerTask('default', 'test');
};
