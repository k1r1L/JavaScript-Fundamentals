function expressionSplit(code) {
    let regex = /[\s(),\.;]+/g;
    return code
        .split(regex)
        .join('\n');
}

console.log(expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));