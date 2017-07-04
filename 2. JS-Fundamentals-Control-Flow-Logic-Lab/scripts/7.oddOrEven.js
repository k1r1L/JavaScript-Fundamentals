function oddOrEven(num) {
    num = Number(num);
    if (isFloat(num)) {
        return 'invalid';
    }

    if(num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }

    function isFloat(n){
        return  n % 1 !== 0;
    }
}
