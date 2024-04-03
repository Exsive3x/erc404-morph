require('dotenv').config();

require('@nomicfoundation/hardhat-toolbox');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-solhint');

// import hardhat CLI tasks
require('./tasks/my-erc404');
require('./tasks/gradient-circle');

// eslint-disable-next-line prefer-destructuring
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 2710,
    },
    
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_SEPOLIA_API_KEY}`,
      accounts: [`${ACCOUNT_PRIVATE_KEY}`],
      chainId: 11155111,
      gas: 'auto',
    },
    morphl2: {
      url: `https://rpc-testnet.morphl2.io/`,
      accounts: [`${ACCOUNT_PRIVATE_KEY}`],
      chainId: 2710,
      gas: 'auto',
    },
    // add more networks here
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      morphl2: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "morphl2",
        chainId: 2710,
        urls: {
          apiURL: "https://explorer-api-testnet.morphl2.io/api",
          browserURL: "https://explorer-testnet.morphl2.io",
        },
      },
    ],
  },
  gasReporter: {
    enabled: true,
  },
};
