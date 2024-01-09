# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- TblColDocumentation psl-lint rule (thanks
  [@ManikandanKKA](https://github.com/ManikandanKKA)).
- PropertyIsDuplicate psl-lint rule (thanks
  [@Thirurakshan](https://github.com/Thirurakshan)).

### Changed

- Project split from original source [ing-bank/vscode-psl](https://github.com/ing-bank/vscode-psl.git)
  to new dedicated source [ing-bank/psl-linter](https://github.com/ing-bank/psl-linter.git).
  This deprecates all previous released versions. Previous revisions from the
  original CHANGELOG are filtered for psl-linter related changes and kept in
  here, and the diffs are investigated to fill in the gaps.
- Update this changelog to follow the latest format from *Keep a Changelog*.

## [1.6.0] - 2019-05-06

### Added

- PropertyIsDummy psl-lint rule (thanks
  [@kewtree1408](https://github.com/kewtree1408)).

## [1.5.1] - 2018-12-09

### Fixed

- Fixed a bug in codeQuality that caused major workbench performance
  degradation.

## [1.5.0] - 2018-12-04

### Added

- TwoEmptyLines psl-lint rule (thanks
  [@RajkumarVelusamy](https://github.com/RajkumarVelusamy)).
- MultiLineDeclare psl-lint rule (thanks
  [@Thirurakshan](https://github.com/Thirurakshan)).

## [1.4.0] - 2018-11-10

### Added

- RuntimeStart rule that checks if variables declared outside of a TP Fence
  are referenced from within.

## [1.3.3] - 2018-11-06

### Changed

- Update dependencies

## [1.3.2] - 2018-11-01

### Changed

- Update dependencies
- Update travis

## [1.3.1] - 2018-11-01

### Changed

- Update dependencies
- Update travis

## [1.3.0] - 2018-11-01

### Added

- Mechanism to generate a JSON file that follows the CodeClimate interface.

## [1.2.0] - 2018-10-20

### Added

- Initial publication with the following rules:
  - TodoInfo psl-lint rule
  - MemberCamelCase psl-lint rule
  - MemberLength psl-lint rule
  - MemberStartsWithV psl-lint rule
  - MethodDocumentation psl-lint rule
  - MethodSeparator psl-lint rule
  - MethodParametersOnNewLine psl-lint rule
  - PropertyLiteralCase psl-lint rule

[Unreleased]: https://github.com/ing-bank/psl-linter/compare/3559ee427a52837baefcdb9b83cd3b97f8eb3324...HEAD

<!--
Links of the release below are before the project was split of the main
ing-bank/vscode-psl project. The link to release 1.2.0 goes to the tag of that
release. The others do show a diff. In these diffs, the psl-linter related
changes can be found in the src/pslLint directory.
-->
[1.6.0]: https://github.com/ing-bank/psl-linter/compare/lint-v1.5.1...lint-v1.6.0
[1.5.1]: https://github.com/ing-bank/psl-linter/compare/psl-lint-v1.5.0...lint-v1.5.1
[1.5.0]: https://github.com/ing-bank/psl-linter/compare/psl-lint-v1.4.0...psl-lint-v1.5.0
[1.4.0]: https://github.com/ing-bank/psl-linter/compare/psl-lint-v1.3.3...psl-lint-v1.4.0
[1.3.3]: https://github.com/ing-bank/psl-linter/compare/psl-lint-1.3.2...psl-lint-v1.3.3
[1.3.2]: https://github.com/ing-bank/psl-linter/compare/psl-lint-1.3.1...psl-lint-1.3.2
[1.3.1]: https://github.com/ing-bank/psl-linter/compare/psl-lint-1.3.0...psl-lint-1.3.1
[1.3.0]: https://github.com/ing-bank/psl-linter/compare/psl-lint-v1.2.0...psl-lint-1.3.0
[1.2.0]: https://github.com/ing-bank/psl-linter/releases/tag/psl-lint-v1.2.0
