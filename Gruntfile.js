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
		pkg : grunt.file.readJSON('package.json'),
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

		release: {
			options: {
				tagMessage: '<%= version %>'
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
				command: 'npm shrinkwrap --dev | tee'
			}
		}
	});

	var load = ['contrib-jshint', 'dev-update', 'version', 'release', 'exec', 'npm-install'];

	load.forEach(function (task) {
		grunt.loadNpmTasks('grunt-' + task);
	});

	var register = {
			export : 'exec:export',
			minify : 'exec:minify',
			publish: 'release',
			test   : ['jshint', 'exec:shrinkwrap', 'exec:qunit'],
			dev    : ['default', 'devUpdate:main', 'minify'],
			default: ['npm-install', 'version', 'test']
		}
	;

	for (var task in register) {
		if (Object.prototype.hasOwnProperty.call(register, task))
			grunt.registerTask(task, register[task]);
	}
};
