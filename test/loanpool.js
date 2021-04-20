const LoanPool = artifacts.require("LoanPool");
const Mortgage = artifacts.require("Mortgage");

contract('LoanPool', (accounts) => {
    it('should allow lenders to add some funds to the loan pool',
        async () => {
        const loanPoolInstance = await LoanPool.deployed();
        const lender = accounts[0];
        const contribAmount = web3.utils.toWei('9', 'ether');

        var result = await loanPoolInstance.send(contribAmount);
        assert.isTrue(result.receipt.status, "Couldn't send " + contribAmount
            + " to the loan pool");

        var totalContribs = await loanPoolInstance.totalContributions();
        assert.equal(totalContribs, contribAmount,
            "Total contributions were not " + contribAmount);
    });

    it('should allow borrowers to apply for a mortgage', async () => {
        const loanPoolInstance = await LoanPool.deployed();
        const borrower = accounts[1];
        const loanAmount = web3.utils.toWei('7', 'ether');

        // Get the instance of the Mortgage contract returned by
        // apply_for_mortgage() and assert it's in the right state. See truffle
        // issue: https://github.com/trufflesuite/truffle/issues/2045
        const {logs} = await loanPoolInstance.applyForMortgage(loanAmount);
        const address = logs[0].address;

        // Works OK and we can see our contract on the console:
        const mortgage = await Mortgage.at(address);
        await console.log("mortgage:");
        await console.log(mortgage);

        // Fails with:
        //   Error: Returned error: VM Exception while processing transaction:
        //   revert
        const state = await mortgage.state();
        await console.log("state:");
        await console.log(state);

        // assert.equal("Applied", state, "Couldn't apply for a "
        //     + loanAmount + " mortgage loan");
    })
});
