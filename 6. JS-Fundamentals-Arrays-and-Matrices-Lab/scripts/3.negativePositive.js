function negativePositiveNumbers(arr) {
    let result = [];
    for(let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'))
}

negativePositiveNumbers([7, -2, 8, 9]);