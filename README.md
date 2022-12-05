# psl-lint

[![Build and Test CI](https://github.com/ing-bank/psl-linter/actions/workflows/build_test.yml/badge.svg)](https://github.com/ing-bank/psl-linter/actions/workflows/build_test.yml)

A linter or lint refers to tools that analyze source code to flag programming
errors, bugs, stylistic errors, and suspicious constructs.

This module works by adding rules that are automatically checked at the
appropriate time.

## Current Rules

* MemberCamelCase
* MemberLength
* MemberLiteralCase
* MemberStartsWithV
* MethodDocumentation
* MethodParametersOnNewLine
* MethodSeparator
* MultiLineDeclare
* PropertyIsDummy
* PropertyIsDuplicate
* RuntimeStart
* TblColDocumentation
* TodoInfo
* TwoEmptyLines

## Contributing

To add a rule, create a class implementing one of the rule interfaces. Then,
add an instance of your class to the `addRules` method found in the
`activate.ts` module.

Rules will have a parsed document at their disposal. Auto-complete can guide
you to using the parsed document effectively. Use the `todo.ts` and
`parameters.ts` modules as examples.

Tests can be found in the `test` directory at the root of the project.
Use `parameters.test.ts` as an example.

## History

This project was originally developed under [ing-bank/vscode-psl] repository,  
in order to preserve that history this project was cloned from  
[ing-bank/vscode-psl] and only code relevant to the psl-linter was retained.  
Please refer to the [split commit] for details.

[split commit]: <https://github.com/ing-bank/psl-linter/commit/3559ee427a52837baefcdb9b83cd3b97f8eb3324>
[ing-bank/vscode-psl]: <https://github.com/ing-bank/vscode-psl.git>
