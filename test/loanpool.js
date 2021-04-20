const LoanPool = artifacts.require("LoanPool");

const WEI_PER_ETH = 1_000_000_000_000_000_000;

contract('LoanPool', (accounts) => {
    it('should add some ETH to the loan pool', async () => {
        const loanPoolInstance = await LoanPool.deployed();
        const lender = accounts[0];
        const contribInEth = 9;
        const contrib = contribInEth * WEI_PER_ETH;

        var result = await loanPoolInstance.send(contrib);
        assert.isTrue(result.receipt.status, "Couldn't send " + contribInEth
            + " ETH to the loan pool");

        var totalContribs = await loanPoolInstance.totalContributions();
        assert.equal(totalContribs, contrib,
            "Total contributions were not " + contribInEth + " ETH");
    });

    it('should allow borrowers to apply for a mortgage', async () => {
        const loanPoolInstance = await LoanPool.deployed();
    })
});
