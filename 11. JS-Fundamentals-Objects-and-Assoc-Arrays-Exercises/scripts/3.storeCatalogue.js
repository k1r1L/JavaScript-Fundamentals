function storeCatalogue(products) {
    let productsPrice = new Map();
    for(let productInfo of products) {
        let productName = productInfo.split(/\s:\s/g)[0];
        let productPrice = productInfo.split(/\s:\s/g)[1];
        productsPrice.set(productName, Number(productPrice));
    }

    let currentChar = '';
    for(let [k, v] of [...productsPrice.entries()].sort()) {
        if(currentChar !== k[0]){
            currentChar = k[0];
            console.log(k[0]);
        }

        console.log(` ${k}: ${v}`);
    }
}