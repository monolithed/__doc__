#! /usr/bin/env sh

[[ ${PWD##*/} == 'build' ]] || \
	cd build

file=../__doc__.js

echo "`cat ${file}`\nmodule.exports = Function.prototype.__doc__;" > ${file}