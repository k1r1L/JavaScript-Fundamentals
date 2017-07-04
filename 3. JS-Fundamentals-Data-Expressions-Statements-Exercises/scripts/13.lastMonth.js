function getLastMonth(numArr) {
    let [day, month, year] = numArr;
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}