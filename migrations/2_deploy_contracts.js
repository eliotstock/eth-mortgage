// SPDX-License-Identifier: MIT
const EnumerableSet = artifacts.require("EnumerableSet");
const LoanPool = artifacts.require("LoanPool");
// const Mortgage = artifacts.require("Mortgage");

module.exports = function(deployer) {
  deployer.deploy(EnumerableSet);
  deployer.link(EnumerableSet, LoanPool);
  deployer.deploy(LoanPool);

  // Don't deploy Mortgage. These only get created as borrowers
  // apply.
  // deployer.deploy(Mortgage);
};
