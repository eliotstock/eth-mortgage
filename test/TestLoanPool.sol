// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.8.3;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/LoanPool.sol";

// Currently fails, probably because we're not using an existing
// account with funds to send to the loan pool. Replaced with a JS test, so
// leave tihs for now.
contract TestLoanPool {
    function testLenderCanSendToLoanPool() public {
        LoanPool pool = LoanPool(DeployedAddresses.LoanPool());
        // bool result = payable(address(pool)).send(1_000);
        // Assert.isTrue(result,
        //         "Lender should be able to send funds to pool");
    }
}
