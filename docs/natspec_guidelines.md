# Guidelines For Solidity NatSpec

-   contract must always have `@title` and `@author`
-   don't forget to use `@notice` for general description and `@dev` for details
-   add all `@param` and `@return` where required
-   reference functions and other contracts with `{}`, e.g. {function} {contract-function}
-   reference parameters and keywords with ``, e.g. \`parameter\` or \`keyword\`
-   use `@inheritdoc` to inherit from interfaces, must be followed by contract name
-   use multi-line comments starting with `/**` and ending with `*/`
-   you can `ignore` test contracts in `/contracts/test` directory, document only what's necessary
-   when writing a multiple line comment for given tag, use `whitespace` in the beginning of the second and further lines

For more details see: https://docs.soliditylang.org/en/v0.8.17/natspec-format.html
