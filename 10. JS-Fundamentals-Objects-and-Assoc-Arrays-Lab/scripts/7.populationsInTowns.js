function populationsInTowns(data) {
    let map = new Map();
    for(let el of data.filter(el => el !== '')) {
        let [townName, townPopulation] = el
            .split(/\s*<->\s*/g);
        townPopulation = Number(townPopulation);
        if (map.has(townName)) {
            let newPopulation = map.get(townName);
            newPopulation += townPopulation;
            map.set(townName, newPopulation);
        } else {
            map.set(townName, townPopulation);
        }
    }

    map.forEach((value, key) => console.log(`${key} : ${value}`))
}