function solve(carsArr) {
    let carsMap = new Map();
    for(let carInfo of carsArr) {
        let splitedArr = carInfo.split(/\s\|\s/g);
        let [carBrand, carModel, producedCars] =
            [splitedArr[0], splitedArr[1], Number(splitedArr[2])];

        if(!carsMap.has(carBrand)){
            carsMap.set(carBrand, new Map());
        }

        let modelsMap = carsMap.get(carBrand);
        if(!modelsMap.has(carModel)){
            modelsMap.set(carModel, producedCars);
        } else {
            let old = modelsMap.get(carModel);
            modelsMap.set(carModel, old + producedCars);
        }

        carsMap.set(carBrand, modelsMap);
    }

    for(let [brand, modelsMap] of carsMap) {
        console.log(brand);
        for(let [model, produced] of modelsMap) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}