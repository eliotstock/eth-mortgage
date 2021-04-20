// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.8.3;

contract Mortgage {

    address public borrower;
    uint public loanAmount;

    constructor(address _borrower, uint _loanAmount) {
        borrower = _borrower;
        loanAmount = _loanAmount;
    }

}
