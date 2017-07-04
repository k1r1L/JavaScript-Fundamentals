function calcCompoundInterest(numArr) {
    let [principalSum, interestRate, period, time] = numArr;
    interestRate /= 100;
    let frequency = 12 / period;
    let deposit = principalSum * Math.pow(1 + interestRate / frequency, frequency * time);

    console.log(deposit.toFixed(2));
}