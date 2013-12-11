#! /usr/bin/env node

var qunit = require('qunit');

qunit.setup({
	log: {
		summary: true,
		errors:  true
	}
});

qunit.run({
	code:  '__doc__.js',
	tests: 'tests/__doc__.js'
});
