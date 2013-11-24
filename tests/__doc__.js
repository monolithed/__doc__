// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Tests for __doc__
 *
 * @author Alexander Guinness <monolithed@gmail.com>
 * @see https://github.com/kof/node-qunit
 * @license MIT
 *
 * date: 24.11.13 / 3:57
 * version 0.0.1
*/


// /** */
// --------------------------------------------

test('/** */', function (assert) {
	var test = function ( ) {
		/** text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/** text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/** text */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/** text */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/**
	text
	*/
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/**
		text
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
		void function ( ) {
			/**
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/** text */
		/** ... */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/** text */
		/** ... */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/**
		...
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/**
		...
		*/

		void function ( ) {
			/**
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});


// /*! */
// --------------------------------------------

test('/*! */', function (assert) {
	var test = function ( ) {
		/*! text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*! text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*! text */

		void function () {
			/*! ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*! text */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*!
	text
	*/
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*!
		text
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*!
		text
		...
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
	/*!
		text
		...
	*/
		void function ( ) {
			/*!
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*! text */
		/*! ... */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*! text */
		/*! ... */

		void function () {
			/*! ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
		/*!
		...
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
		/*!
		...
		*/

		void function ( ) {
			/*!
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});


// /*! */ | /** */
// --------------------------------------------

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*! text */
		/** text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
	/*! text */
	/** text */

		void function () {
			/*! ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*! text */
		/** text */

		void function () {
			/*! ... */
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
		/**
		text
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
	/*!
	text
	*/
	/**
	text
	*/
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
	/*!
		text
	*/
	/**
		text
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
	/*!
		text
		...
	*/
	/**
		text
		...
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
	/*!
		text
		...
	*/
	/**
		text
		...
	*/
		void function ( ) {
			/*!
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*! text */
		/** ... */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*! text */
		/** ... */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
		/**
		...
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/*! */ | /** */', function (assert) {
	var test = function ( ) {
		/*!
		text
		*/
		/**
		...
		*/

		void function ( ) {
			/*!
			...
			*/
			/**
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});


// /*! */ | /** */
// --------------------------------------------

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/** text */
		/*! text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
	/** text */
	/*! text */

		void function () {
			/*! ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/** text */
		/*! text */

		void function () {
			/** ... */
			/*! ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/*!
		text
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
	/**
	text
	*/
	/*!
	text
	*/
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
	/**
		text
	*/
	/*!
		text
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
		void function ( ) {
			/*!
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/** text */
		/*! ... */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/** text */
		/*! ... */

		void function () {
			/** ... */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/*!
		...
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */ | /*! */', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/*!
		...
		*/

		void function ( ) {
			/**
			...
			*/
			/*!
			...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});


// /** */ | /*! */ | /* */ | //
// --------------------------------------------

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		/** text */
		/*! text */
		/* text */
		// text
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	/** text */
	/*! text */
	/* text */
	// text
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		/** text */
		/*! text */
		/* text */
		// text

		void function () {
			/** text */
			/*! text */
			/* text */
			// text
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
		var test = function ( ) {
		/** text */
		/*! text */
		/* text */
		// text

		void function () {
			/** text */
			/*! text */
			/* text */
			// text
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		/**
		text
		*/
		/*!
		text
		*/
		/*
		text
		*/
		/*
		text
		*/
		// text
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	/**
	text
	*/
	/*!
	text
	*/
	/*
	text
	*/
	/*
	text
	*/
	// text
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		/**
			text
		*/
		/*!
			text
		*/
		/*
			text
		*/
		/*
			text
		*/
		//  text
	};

	equal(test.__doc__, '\n\t\t\ttext\n\t\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
	/*
		text
		...
	*/
	/*
		text
		...
	*/
	//	text
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
	/*
		text
		...
	*/
	/*
		text
		...
	*/
	//	text
		void function ( ) {
			/**
				text
				...
			*/
			/*!
				text
				...
			*/
			/*
				text
				...
			*/
			/*
				text
				...
			*/
			//	text
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});


// // | /** */ | /* */ | | /*! */
// --------------------------------------------

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		// text
		/** text */
		/* text */
		/*! text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	// text
	/** text */
	/* text */
	/*! text */
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		// text
		/** text */
		/* text */
		/*! text */

		void function () {
			// text
			/** text */
			/* text */
			/*! text */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
		var test = function ( ) {
		// text
		/** text */
		/* text */
		/*! text */

		void function () {
			// text
			/** text */
			/* text */
			/*! text */
		}
	};

	equal(test.__doc__, '\u0020text\u0020');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		// text
		/**
		text
		*/
		/*
		text
		*/
		/*
		text
		*/
		/*!
		text
		*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	// text
	/**
	text
	*/
	/*
	text
	*/
	/*
	text
	*/
	/*!
	text
	*/
	};

	equal(test.__doc__, '\n\ttext\n\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
		//  text
		/**
			text
		*/
		/*
			text
		*/
		/*
			text
		*/
		/*!
			text
		*/
	};

	equal(test.__doc__, '\n\t\t\ttext\n\t\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	//	text
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
	/*
		text
		...
	*/
	/*
		text
		...
	*/
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});

test('/** */ | /*! */ | /* */ | // ', function (assert) {
	var test = function ( ) {
	//	text
	/**
		text
		...
	*/
	/*!
		text
		...
	*/
	/*
		text
		...
	*/
	/*
		text
		...
	*/

		void function ( ) {
			//	text
			/**
				text
				...
			*/
			/*!
				text
				...
			*/
			/*
				text
				...
			*/
			/*
				text
				...
			*/
		};
	};

	equal(test.__doc__, '\n\t\ttext\n\t\t...\n\t');
});


// Empty string
// --------------------------------------------

test(' ', function (assert) {
	var test = function ( ) {

	};

	equal(test.__doc__, '');
});

test('/***/', function (assert) {
	var test = function ( ) {
		/***/
	};

	equal(test.__doc__, '');
});

test('/** */', function (assert) {
	var test = function ( ) {
		/** */
	};

	equal(test.__doc__, ' ');
});

test('/*! */', function (assert) {
	var test = function ( ) {
		/*! */
	};

	equal(test.__doc__, ' ');
});

test('/* */', function (assert) {
	var test = function ( ) {
		/* */
	};

	equal(test.__doc__, '');
});

test('/* */', function (assert) {
	var test = function ( ) {
		/* */
	};

	equal(test.__doc__, '');
});

test('/***/', function (assert) {
	var test = function ( ) {
		/***/
		/*!*/
		/**/
		//
	};

	equal(test.__doc__, '');
});

test('/***/', function (assert) {
	var test = function ( ) {
		/** */
		/*! */
		/* */
		//
	};

	equal(test.__doc__, ' ');
});
