# more details

-   https://www.npmjs.com/package/hardhat-tracer

### commands

-   npx hardhat test --traceError # prints calls for failed txs
-   npx hardhat test --fulltraceError # prints calls and storage ops for failed txs
-   npx hardhat test --trace # prints calls for all txs
-   npx hardhat test --fulltrace # prints calls and storage ops for all txs

### shorthand

-   npx hardhat test --v # same as --traceError
-   npx hardhat test --vv # same as --fulltraceError
-   npx hardhat test --vvv # same as --trace
-   npx hardhat test --vvvv # same as --fulltrace

### specify opcode

-   npx hardhat test --v --opcodes ADD,SUB # shows any opcode specified for only failed txs
-   npx hardhat test --vvv --opcodes ADD,SUB # shows any opcode specified for all txs

### trace tx

-   npx hardhat trace --hash 0xTransactionHash # works if mainnet fork is on
-   npx hardhat trace --hash 0xTransactionHash --rpc https://url # must be archive node

### trace call

-   npx hardhat tracecall --to 0xAddr --data 0xData --from 0xAddr --value 123 # works if mainnet fork is on
-   npx hardhat tracecall --to 0xAddr --data 0xData --opcodes SLOAD --rpc https://url --blocknumber 1200000 # must be archive node

### calldata decoder

-   npx hardhat decode --data 0x095ea7b300000000000000000000000068b3465833fb72a70ecdf485e0e4c7bd8665fc45ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

*   npx hardhat decode --data 0x3850c7bd --returndata 0x000000000000000000000000000000000000000000024d0fa9cd4ba6ff769172fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdea1000000000000000000000000000000000000000000000000000000000000a244000000000000000000000000000000000000000000000000000000000000ff78000000000000000000000000000000000000000000000000000000000000ffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
