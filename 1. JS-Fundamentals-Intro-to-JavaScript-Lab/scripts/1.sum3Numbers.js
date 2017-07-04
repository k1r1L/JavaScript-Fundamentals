function sum([num1, num2, num3]) {
    let sum = Number(0);
    [num1, num2, num3].map(Number).forEach(n => sum += n);
    console.log(sum);
}

sum(['2', '3', '4']);
sum(['1.5', '1.5', '-1']);