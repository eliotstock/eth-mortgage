// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.8.3;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract LoanPool {

    using EnumerableSet for EnumerableSet.AddressSet;

    EnumerableSet.AddressSet private lenders;

    mapping (address => uint) lenderContributions;

    uint public totalLent;

    // TODO(P2): Remove and replace with a getter that iterates over
    // lenderContributions using keys from lenders.
    uint public totalContributions;

    // uint8 constant EXCESS_FUNDS_PERCENT_LIMIT = 110;

    event Received(address, uint);

    constructor() {
        totalLent = 0;
    }

    // Both lenders and mortgage contracts can send money here by
    // calling send() or transfer(). Borrowers should not call this
    // contract.

    // TODO(P3): Should callers use send(), which returns false on
    // failure, or transfer(), which throws on failure?
    receive() external payable {
        emit Received(msg.sender, msg.value);

        // TODO(P1): Look up the sender and figure out whether
        // they're a lender, a mortgage contract or neither. For now,
        // assume they're a lender.

        // TODO(P3): Don't accept more funds that we can reasonably
        // lend out to borrowers.
        // uint256 excessFundsAbs = address(this).balance - totalLent;
        // Avoid division by zero when we're brand new:
        // uint256 excessFundsPercent = (excessFundsAbs / totalLent)
        //         * 100;
        // require(excessFundsPercent < EXCESS_FUNDS_PERCENT_LIMIT,
        //         "Sorry, too much. We're full.");

        // Register the lender's contribution to the pool.
        lenders.add(msg.sender);
        lenderContributions[msg.sender] += msg.value;
        totalContributions += msg.value;
    }
}