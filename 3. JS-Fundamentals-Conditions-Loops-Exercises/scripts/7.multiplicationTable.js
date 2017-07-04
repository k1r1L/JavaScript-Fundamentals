function multiplicationTable(n) {
    let tableResult = '<table border="1">\n';
    tableResult += '<tr><th>x</th>';
    for(let i = 1; i <= n; i++) {
        tableResult += `<th>${i}</th>`;
    }

    tableResult += '</tr>\n';
    for(let i = 1; i <= n; i++) {
        tableResult += '<tr>';
        tableResult += `<th>${i}</th>`;
        for(let j = 1; j <= n; j++) {
            tableResult += `<td>${i * j}</td>`
        }

        tableResult += '</tr>\n';
    }

    tableResult += '</table>';
    return tableResult;
}


