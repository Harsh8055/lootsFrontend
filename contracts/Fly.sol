pragma solidity 0.8.7^;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Fly is ERC20 {
    address owner ;
    constructor() ERC20("Fly", "FLY", 18) {
      owner = msg.sender;
    }

    function mint(address to, uint amount) public external {
      require(owner == msg.sender);
      _mint(to,amount);
    }
}

contract ToadFly is ERC721{
    uint numberOfCryptoadzMinted = 0;
    ERC721 Cryptoadz;
    ERC20 Fly;
    mapping(uint => uint) stakedTimestamp;
    constructor() ERC721("ToadFly", "toadfly") {
      Cryptoadz = ERC721(0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6);
      Fly = ERC20();
    }

    function mintCryptoadz(uint tokenId) public {
      require(Cryptoadz.ownerOf(tokenId) == msg.sender);
      require(numberOfCryptoadzMinted < 1000);
      _safeMint(msg.sender, tokenId);
      numberOfCryptoadzMinted += 1;
    }

    function mint(uint tokenId) public {
      _safeMint(msg.sender, tokenId)
    }

    function tokenUri(uint tokenId) public returns(string memory){
      return string(abi.encode("ipfs://QmWEFSMku6yGLQ9TQr66HjSd9kay8ZDYKbBEfjNi4pLtrr/", tokenId));
    }

    function stake(tokenId) public {
        require(msg.sender == ownerOf(tokenId));
        stakedTimestamp[tokenId] = block.timestamp;
    }

    function unstake(tokenId) public {
        require(msg.sender == ownerOf(tokenId));
        claim(tokenId);
        stakedTimestamp[tokenId] = 0;
    }

    function claim(tokenId) public {
        require(msg.sender == ownerOf(tokenId));
        uint amount = (stakedTimestamp[tokenId] - block.timestamp) * 10000 ether / 1 days;
        Fly.mint(msg.sender, amount);
        stakedTimestamp[tokenId] = block.timestamp;
    }


}

