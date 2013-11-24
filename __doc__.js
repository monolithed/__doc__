// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * __doc__ (documentation string) for JavaScript
 *
 * A docstring is a string literal specified in source code that is used,
 * like a comment, to document a specific segment of code.
 *
 * A docstring occurs as the first statement in a module,
 * function, class, or method definition.
 *
 * The first statement should start with /** or /*!
 *
 * @author Alexander Guinness <monolithed@gmail.com>
 *
 * @see:
 *    http://www.python.org/dev/peps/pep-0257/
 *    http://en.wikipedia.org/wiki/Docstring
 *
 * @license MIT
 *
 * date 24.11.13 / 2:22
 * version 0.0.1
 */


Object.defineProperty(Function.prototype, '__doc__', {
	get: function ( ) {
		'use strict';

		var comment = this.toString(),
			__doc__ = '';

		if (comment = comment.match(/\/\*[!*]([^S\/]+)\*\//))
			return comment[1];

		return __doc__;
	}
});
