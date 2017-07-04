function isLeapYear(year) {
    year = Number(year);
    let isDivisible = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

    return isDivisible ? 'yes' : 'no';
}