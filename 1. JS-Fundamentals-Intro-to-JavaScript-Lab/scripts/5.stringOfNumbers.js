function stringOgNumbers(num) {
    num = Number(num);
    let resultStr = '';
    for(let i = 1; i <= num; i++) {
        resultStr += i;
    }

    console.log(resultStr);
}

stringOgNumbers(['11']);