const { Web3 } = require("web3");

const web3 = new Web3("https://testnetrpc.mstblockchain.com");

async function test() {
  const chainId = await web3.eth.getChainId();

  console.log("MST Testnet connected");
  console.log("Chain ID:", chainId.toString());
}

test();
