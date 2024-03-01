import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-storage-layout-changes"
import "hardhat-docgen"
import "@primitivefi/hardhat-dodoc"
import "hardhat-contract-sizer"
import "hardhat-tracer"
import "hardhat-output-validator"
import "hardhat-abi-exporter"
import "./scripts/tasks/codesize"
import dotenv from "dotenv"
dotenv.config()

const excludedContractsForPlugins = ["test/"]

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
        },
        dev: {
            url: "http://127.0.0.1:8545",
        },
        testSaigon: {
            chainId: 2021,
            url: "https://saigon-testnet.roninchain.com/rpc",
            accounts: [process.env.PRIVATE_KEY || "0x..."],
        },
        testMumbai: {
            chainId: 80001,
            url: "https://matic-mumbai.chainstacklabs.com",
            accounts: [process.env.PRIVATE_KEY || "0x..."],
        },
    },
    solidity: {
        version: "0.8.17",
        settings: {
            // viaIR: true,
            metadata: {
                bytecodeHash: "none",
            },
            optimizer: {
                enabled: true,
                runs: 999999,
            },
            outputSelection: {
                "*": {
                    "*": ["storageLayout", "evm.bytecode", "evm.assembly", "devdoc"],
                },
            },
        },
    },
    storageLayoutChanges: {
        fullPath: true,
    },
    docgen: {
        path: "./docs/docweb",
        clear: true,
        runOnCompile: false,
        except: excludedContractsForPlugins,
    },
    dodoc: {
        runOnCompile: false,
        debugMode: false,
        exclude: excludedContractsForPlugins,
        outputDir: "./docs/docmd",
        freshOutput: true,
        keepFileStructure: true,
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: true,
        runOnCompile: false,
        strict: false,
        outputFile: "./contract-sizes",
        except: excludedContractsForPlugins,
    },
    // outputValidator: {
    //     runOnCompile: false,
    //     errorMode: true,
    //     checks: {
    //         title: "error",
    //         details: "error",
    //         missingUserDoc: "error",
    //         missingDevDoc: "error",
    //         ctor: "error",
    //         params: "error",
    //         returns: "error",
    //         compilationWarnings: "warning",
    //         variables: "error",
    //         events: "error",
    //         functions: "error",
    //     },
    //     exclude: excludedContractsForPlugins,
    // },
    abiExporter: {
        path: "./abi",
        runOnCompile: false,
        clear: true,
        flat: false,
        except: excludedContractsForPlugins,
        spacing: 4,
        pretty: true,
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 100000,
    },
}

export default config
