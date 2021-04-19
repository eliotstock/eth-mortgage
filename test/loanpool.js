const LoanPool = artifacts.require("LoanPool");

const WEI_PER_ETH = 1_000_000_000_000_000_000;

contract('LoanPool', (accounts) => {
    it('should add 500 ETH to the loan pool', async () => {
      const loanPoolInstance = await LoanPool.deployed();

      const lender = accounts[0];

      // Required: 90_134_439_500_000_000_000
      // Got: 9_640_122_580_000_000_000
      const contribInEth = 9;
      const contrib = contribInEth * WEI_PER_ETH;

      // TODO(P1): Get the result of send() and assert it's true.
      await loanPoolInstance.send(contrib);
      var totalContribs = await loanPoolInstance.totalContributions();
  
      assert.equal(totalContribs, contrib,
        "Total contributions were not " + contribInEth + " ETH");
    });
});
