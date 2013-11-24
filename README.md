# \_\_doc\_\_ (docstring) [![Build Status](https://travis-ci.org/monolithed/__doc__.png)](https://travis-ci.org/monolithed/__doc__)

Docstring is a string literal specified in source code that is used,
like a comment, to document a specific segment of code.

A docstring occurs as the first statement in a module, function, class, or method definition.


Languages that support docstrings include Python, Lisp, Elixir, and Clojure.

For more info see the following links:
	* [PEP-0257] (http://www.python.org/dev/peps/pep-0257/)
	* [Docstring] (http://en.wikipedia.org/wiki/Docstring)
	* [Literate programming] (http://en.wikipedia.org/wiki/Literate_programming)


### Synopsis

```js
Function.prototype.__doc__
```

### Installation

##### npm

```sh
npm install -g docstring
```
or
##### git

```sh
git clone https://github.com/monolithed/__doc__.git
```

### Dependencies

```
ECMAScript 5: Object.defineProperty
```


### Usage

*Docstrings can be accessed by the __doc__ property on functions. <br />
The following JavaScript example shows the declaration of docstrings within a source file:*

```js
var test = function ( data ) {
	/** @params {string} data */
};

console.log(test.__doc__);  // @params {string} data

```

### Testing


```
npm install && grunt
```


<br />
<br />
<br />

##

* Include library is licensed under the MIT (LICENSE.txt) license

* Copyright (c) 2013 [Alexander Guinness] (https://github.com/monolithed)
