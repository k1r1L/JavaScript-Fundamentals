function rectangleOfStars(n = '5') {
    function printStars(count = n) {
        console.log('* '.repeat(count));
    }
    for (let i=1; i<=n; i++) {
        printStars();
    }
}