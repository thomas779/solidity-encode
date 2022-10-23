import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: { 
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
    
  },
  paths: { tests: "tests" },
  networks: {
    hardhat: {
      hardfork: "merge"
    }
  },
};

export default config;
