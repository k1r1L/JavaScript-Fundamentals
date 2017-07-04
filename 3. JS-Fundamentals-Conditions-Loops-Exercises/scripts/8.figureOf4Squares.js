function print(n) {
    let length = n % 2 === 0 ? n - 1 : n;
    let repeat = (2 * n - 4) / 2;
    for(let i = 1; i <= length; i++) {
        if (i === 1 || i === length || i === Math.ceil(n / 2)) {
            console.log(`+${'-'.repeat( repeat )}+${'-'.repeat(repeat)}+`)
        } else {
            console.log(`|${' '.repeat(repeat)}|${' '.repeat(repeat)}|`);
        }
    }
}