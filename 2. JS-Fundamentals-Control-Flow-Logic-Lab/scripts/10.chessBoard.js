function chessBoard(n) {
    n = Number(n);
    let html = '<div class="chessboard">\n';

    for(let i = 1; i <= n; i++) {
        let color = i % 2 !== 0 ? 'black' : 'white';
        html += '<div>\n';
        for(let i = 0; i < n; i++) {
            html += `\t<span class="${color}"></span>\n`;
            color = color === 'white' ? 'black' : 'white';
        }
        html += '</div>\n';
    }
    html += '</div>';
    return html;
}

console.log(chessBoard('4'));

