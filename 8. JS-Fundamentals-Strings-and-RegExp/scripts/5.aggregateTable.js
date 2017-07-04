function aggregateTable(arr) {
    let sum = 0;
    let list = [];
    arr = arr.filter(el => el !== '');
    for(let townInfo of arr) {
        let townData = townInfo.split('|');
        let townName = townData[1].trim();
        let townIncome = Number(townData[2].trim());
        list.push(townName);
        sum += townIncome;
    }

    return `${list.join(', ')}\n${sum}`;
}