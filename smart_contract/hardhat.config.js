// https://eth-sepolia.g.alchemy.com/v2/VSRvKjofpCc3yQrnl6VhiDhgB4k2w28d

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VSRvKjofpCc3yQrnl6VhiDhgB4k2w28d",
      accounts: [
        "a0c4a932b82d465c0655d7e55836be46e27b9fc0c9f9e8a01a67ac397cc975ad",
      ],
    },
  },
};
