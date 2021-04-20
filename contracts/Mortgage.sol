// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.8.3;

contract Mortgage {

    address public borrower;

    constructor(address _borrower) {
        borrower = _borrower;
    }

}
