const LoanPool = artifacts.require("LoanPool");
const Mortgage = artifacts.require("Mortgage");

contract('LoanPool', (accounts) => {
    it('should allow lenders to add some funds to the loan pool',
        async () => {
        const loanPoolInstance = await LoanPool.deployed();
        const lender = accounts[0];
        const contribAmount = web3.utils.toWei('9', 'ether');

        var result = await loanPoolInstance.send(contribAmount);
        assert.isTrue(result.receipt.status, "Couldn't send "
            + contribAmount + " to the loan pool");

        var totalContribs = await loanPoolInstance
            .totalContributions();
        assert.equal(totalContribs, contribAmount,
            "Total contributions were not " + contribAmount);
    });

    it('should allow borrowers to apply for a mortgage',
        async () => {
        const loanPoolInstance = await LoanPool.deployed();
        const borrower = accounts[1];
        const loanAmount = web3.utils.toWei('7', 'ether');

        // TODO: Get the instance of the Mortgage contract returned
        // by apply_for_mortgage() and assert it's in the right
        // state.
        var result = await loanPoolInstance
            .apply_for_mortgage(loanAmount);

        console.log(result);

        assert.isTrue(result.receipt.status, "Couldn't apply for a "
            + loanAmount + " mortgage loan");
    })
});
