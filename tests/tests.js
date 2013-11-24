// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Tests for the __doc__
 *
 * @author Alexander Guinness <monolithed@gmail.com>
 * @see https://github.com/kof/node-qunit
 * @license MIT
 *
 * date: 24.11.13 / 4:50
 * version 0.0.1
*/


var qunit = require('qunit');

qunit.setup({
	log: {
		summary: true,
		errors:  true
	}
});

qunit.run({
	code: '../__doc__.js',
	tests: './__doc__.js'
});

