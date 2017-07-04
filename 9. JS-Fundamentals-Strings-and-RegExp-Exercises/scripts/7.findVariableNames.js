function findVariableNames(text) {
    let pattern = /\b_([A-Za-z\d]+)\b/g;
    let variables = [];
    let match = pattern.exec(text);
    while (match) {
        variables.push(match[1]);
        match = pattern.exec(text);
    }

    return variables.join(',');
}