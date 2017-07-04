function calcBill(arr) {
    let products = arr
        .filter((el, index) => index % 2 === 0 && el !== '');
    let price = arr
        .filter((el, index) => index % 2 === 1)
        .map(Number)
        .reduce((a, b) => a + b);

    return `You purchased ${products.join(', ')} for a total sum of ${price}`;
}