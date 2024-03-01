// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC721} from "solmate/src/tokens/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title GameContract
 * @author Jan Smrza
 * @notice Contract for game assets
 * @dev This contract is used for minting game assets
 */
contract GameContract is ERC721, Ownable {
    using ECDSA for bytes32;
    using Strings for uint256;

    uint256 public constant PRESALE_MAX_MINT = 3;
    uint256 public constant SUPPLY_PRESALE = 5000;

    address public signer;
    uint256 public presalePrice = 0.01 ether;
    uint32 public presaleStartTime;
    uint32 public presaleEndTime;
    uint256 public totalSupply;
    mapping(address => uint256) public numberMinted;
    uint256 public nextTokenId;

    string private _baseTokenURI = "TBD";

    constructor() ERC721("TBD", "TBD") {}

    function _baseURI() internal view virtual returns (string memory) {
        return _baseTokenURI;
    }

    function presaleMint(uint256 quantity) external payable {
        require(block.timestamp >= presaleStartTime && block.timestamp < presaleEndTime, "Presale not active");
        require(totalSupply + quantity <= SUPPLY_PRESALE, "Presale sold out");
        require(numberMinted[msg.sender] + quantity <= PRESALE_MAX_MINT, "Cannot mint more than 3 during presale");
        require(msg.value == presalePrice * quantity, "Insufficient payment");

        for (uint256 i = 0; i < quantity; i++) {
            _safeMint(msg.sender, nextTokenId);
            nextTokenId++;
        }
        numberMinted[msg.sender] += quantity;
        totalSupply += quantity;
    }

    function gameplayMint(bytes memory signature, bytes memory data) external payable {
        require(_recoverSigner(signature, data) == signer, "Incorrect data signature");
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
        totalSupply++;
    }

    function _recoverSigner(bytes memory signature, bytes memory data) private pure returns (address) {
        bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", keccak256(abi.encodePacked(data))));
        return messageDigest.recover(signature);
    }

    function setSigner(address newSigner) external onlyOwner {
        signer = newSigner;
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    function setPresale(uint32 start, uint32 end) external onlyOwner {
        presaleStartTime = start;
        presaleEndTime = end;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return string(abi.encodePacked(_baseURI(), tokenId.toString()));
    }
}
