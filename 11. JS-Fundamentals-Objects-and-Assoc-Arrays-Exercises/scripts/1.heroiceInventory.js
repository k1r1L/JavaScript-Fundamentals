function registerHeroes(heroes) {
    let jsonHeroes = [];
    for(let heroInfo of heroes) {
        let heroTokens = heroInfo.split(' / ').filter(el => el !== '');
        if(heroTokens.length === 1){
            jsonHeroes.push({ name: heroTokens[0]});
        } else if(heroTokens.length === 2
            && heroTokens[1].indexOf(',') === -1){
            jsonHeroes.push({
                name: heroTokens[0],
                level: Number(heroTokens[1]),
                items: []});
        } else if(heroTokens.length === 2
            && heroTokens[1].indexOf(',') !== -1){
            jsonHeroes.push({
                name: heroTokens[0],
                items: heroTokens[1].split(', ')});
        } else {
            jsonHeroes.push({ name: heroTokens[0],
                level: Number(heroTokens[1]), items: heroTokens[2].split(', ')});
        }
    }

    return JSON.stringify(jsonHeroes);
}

