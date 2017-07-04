function sumByTown(data) {
    let obj = {};
    data = data.filter((el) => el !== '');
    for(let i = 0; i < data.length; i += 2) {
        if (obj.hasOwnProperty(data[i])) {
            obj[data[i]] += Number(data[i + 1]);
        } else {
            obj[data[i]] = Number(data[i + 1]);
        }
    }

    return JSON.stringify(obj);
}