// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VestingContract is Ownable {
    IERC20 public maticToken;
    address public beneficiary;
    uint256 public vestingStartTime;
    uint256 public vestingDuration;
    uint256 public totalAmount;
    uint256 public withdrawableAmount;

    event Deposit(address indexed depositor, uint256 amount);
    event Withdrawal(address indexed beneficiary, uint256 amount);

    constructor(
        address _maticToken,
        address _beneficiary,
        uint256 _vestingDuration,
        uint256 _totalAmount
    ) {
        maticToken = IERC20(_maticToken);
        beneficiary = _beneficiary;
        vestingStartTime = block.timestamp;
        vestingDuration = _vestingDuration;
        totalAmount = _totalAmount;
        withdrawableAmount = 0;
    }

    modifier onlyBeneficiary() {
        require(msg.sender == beneficiary, "Not the beneficiary");
        _;
    }

    function getCurrentTime() public view returns (uint256) {
        return block.timestamp;
    }

    function calculateWithdrawableAmount() public view returns (uint256) {
        if (getCurrentTime() < vestingStartTime) {
            return 0;
        }

        uint256 elapsedTime = getCurrentTime() - vestingStartTime;
        if (elapsedTime >= vestingDuration) {
            return totalAmount;
        }

        return (totalAmount * elapsedTime) / vestingDuration;
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Deposit amount must be greater than zero");
        maticToken.transferFrom(msg.sender, address(this), amount);

        emit Deposit(msg.sender, amount);
    }

    function withdraw() external onlyBeneficiary {
        uint256 amount = calculateWithdrawableAmount() - withdrawableAmount;
        require(amount > 0, "No funds available for withdrawal");

        withdrawableAmount = calculateWithdrawableAmount();
        maticToken.transfer(beneficiary, amount);

        emit Withdrawal(beneficiary, amount);
    }
}
