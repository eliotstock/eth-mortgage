// SPDX-License-Identifier: MIT
const EnumerableSet = artifacts.require("EnumerableSet");
const LoanPool = artifacts.require("LoanPool");

module.exports = function(deployer) {
  deployer.deploy(EnumerableSet);
  deployer.link(EnumerableSet, LoanPool);
  deployer.deploy(LoanPool);
};
