# Contributing

Please follow this guide while contributing.

## General Rules

-   follow Solidity style guide: https://docs.soliditylang.org/en/v0.8.17/style-guide.html
-   follow [NatSpec guidelines](natspec_guidelines.md)
-   move any external Solidity libraries to project internally
-   for pull request see [template](pull_request_template.md)
-   lint your code
-   reach 100% test coverage
-   update [CHANGELOG](../CHANGELOG.md) when necessary
-   update [architecture](architecture.md) docs when necessary
-   follow [branch](#branch-naming-rules) and [commit](#commit-rules) rules

### Branch Naming Rules

Available branch names are:

-   `feature/` _[Create a new feature]_
-   `bugfix/` _[Fix bugs]_
-   `hotfix/` _[Quick urgent fix]_
-   `chore/` _[Implementation of existing features]_
-   `deploy/` _[Deployment branch]_

followed by lowercase letters or numbers seperated by hyphens.

### Commit Rules

Commit message must start with `type`:

-   `add` _[Create a capability]_
-   `edit` _[Edit a capability]_
-   `cut` _[Remove a capability]_
-   `fix` _[Fix an issue]_
-   `test` _[Add a test]_
-   `bump` _[Change the version of something]_
-   `make` _[Change the build process, tooling, infra]_
-   `refactor` _[Code change that is only refactoring]_
-   `reformat` _[Refactor of formatting]_
-   `optimize` _[Solidity code optimization]_
-   `document` _[Update documentation]_
-   `deploy` _[Deploying contracts]_

followed by a colon `:`, whitespace and subject in `Sentence case` of up to 50 characters.
