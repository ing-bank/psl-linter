# Change Log

All notable changes will be documented in this file.

## v1.7.0

* Adds rule for "TblColDocumentation" from psl-lint (thanks [@ManikandanKKA](https://github.com/ManikandanKKA))
* Adds rule for "PropertyIsDuplicate" from psl-lint (thanks [@Thirurakshan](https://github.com/Thirurakshan))
* Fix code quality to only lint when config file is present
* Project split from original source [ing-bank/vscode-psl](https://github.com/ing-bank/vscode-psl.git)
  to new dedicated source [ing-bank/psl-parser](https://github.com/ing-bank/psl-parser.git).
* Deprecated all previous released versions.

## v1.6.0

* Adds rule "PropertyIsDummy" from psl-lint (thanks [@kewtree1408](https://github.com/kewtree1408))

## v1.5.1

* Fixed a bug in codeQuality that caused major workbench performance degradation.

## v1.5.0

* TwoEmptyLines psl-lint rule (thanks [@RajkumarVelusamy](https://github.com/RajkumarVelusamy))
* MultiLineDeclare psl-lint rule (thanks [@Thirurakshan](https://github.com/Thirurakshan))
* Automated deployments (thanks [@morganing](https://github.com/morganing))
* Improved error messages when attempting to test compile an invalid file (thanks [@cjprieb](https://github.com/cjprieb))
* Updated snippets (thanks [@cjprieb](https://github.com/cjprieb))
* Improved PSL statement parsing

## v1.4.1

* Fixed a bug that would break do statement completion
* Fixed syntax highlighting to no longer highlight fields with keyword identifiers (thanks [@cjprieb](https://github.com/cjprieb))
* Made the OPEN section header syntax highlighting less strict to allow multiple spaces after the OPEN  identifier (thanks [@cjprieb](https://github.com/cjprieb))

## v1.4.0

Added new rule `RuntimeStart` that checks if variables declared outside of a TP Fence are referenced from within.

## v1.2.0

Linting in PSL now uses a configuration file. By default the setting `"psl.lint"` is now `"config"`. Other options are `"all"` or `"none"`.

A file must be included in order to be checked. If it is then excluded, it will not be checked. Here is an example layout:

```json
{
	"version": 1,
	"include": {
		"Z*": ["*"],
		"*.psl": ["*"],
		"*": ["TodoInfo"]
	},
	"exclude": {}
}
```

This will lint files starting with a Z and all .psl files. All rules will be applied to these files. All files will have the TodoInfo rule applied to them.

These are the current rules:
- TodoInfo
- MemberCamelCase
- MemberLength
- MemberStartsWithV
- MethodDocumentation
- MethodSeparator
- MethodParametersOnNewLine
- PropertyLiteralCase

Additionally, this version also introduces Completion Items with Suggestions as another preview feature for the PSL language.

## v1.1.1

Introduced toggle to enable preview features (`"psl.previewFeatures" : true`). Restart after configuring to enable.

Preview features include:
- Hover and go-to definitions.
- Actions for missing separator and documentation on methods.

## v1.1.0
Implementation of the psl-lint code quality checker. Enable it by adding the setting `"psl.lint" : true` to your settings.json.

## v1.0.1
Fix a small bug where the Configure Environments button does not update properly.

## v1.0.0
Promote to 1.0.0 stable. Introduces language support.

- Tokenizer and parser
- Data item support
- Outlines for PSL entities
- Record completion items
- Fixes to environment configuration interface
