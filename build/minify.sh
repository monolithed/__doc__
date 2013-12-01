#! /usr/bin/env sh

# Google closure compiler
# http://code.google.com/p/closure-compiler/wiki/Warnings

# --compilation_level
# WHITESPACE_ONLY | SIMPLE_OPTIMIZATIONS | ADVANCED_OPTIMIZATIONS

# --compilation_level
# QUIET | DEFAULT | VERBOSE


[[ ${PWD##*/} == 'build' ]] || \
	cd build

file=../__doc__
path=../tools/closure-compiler

if [[ -f ${path}.jar ]]
	then
		java -jar ${path}.jar \
			--js=${file}.js \
			--js_output_file=${file}.min.js \
			--create_source_map=${file}.json \
			--warning_level=VERBOSE \
			--summary_detail_level=3 \
			--charset=UTF-8 \
			--compilation_level=ADVANCED_OPTIMIZATIONS \
			--formatting=SINGLE_QUOTES \
			--jscomp_error=ambiguousFunctionDecl \
			--jscomp_error=checkDebuggerStatement \
			--jscomp_error=checkRegExp \
			--jscomp_error=checkVars \
			--jscomp_error=const \
			--jscomp_error=constantProperty \
			--jscomp_error=es5Strict \
			--jscomp_error=internetExplorerChecks \
			--jscomp_error=invalidCasts \
			--jscomp_error=missingProperties \
			--jscomp_error=suspiciousCode \
			--jscomp_warning=undefinedNames \
			--jscomp_error=undefinedVars \
			--jscomp_warning=uselessCode \
			--jscomp_warning=externsValidation \
			--jscomp_warning=duplicate \
			--jscomp_warning=deprecated \
			--jscomp_warning=accessControls \
			--jscomp_warning=visibility \
			--jscomp_warning=checkTypes \
			--jscomp_warning=fileoverviewTags \
			--jscomp_warning=nonStandardJsDocs \
			--jscomp_warning=strictModuleDepCheck \
			--jscomp_warning=unknownDefines

	else
		git clone --recursive \
			https://code.google.com/p/closure-compiler ${path}

		if [[ ! -z `which ant 2>/dev/null` ]]
			then
				build=${path}/build

				[[ -d ${build} ]] && \
					rm -rf ${build}

				ant -file ${build}.xml
				cp ${build}/compiler.jar ${path}

			else
				echo -e 'You must install the apache-ant!'
		fi
fi

cd - &>/dev/null
