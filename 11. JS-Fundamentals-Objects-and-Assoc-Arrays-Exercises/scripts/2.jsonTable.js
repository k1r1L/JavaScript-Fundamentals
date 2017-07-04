function jsonToHtmlTable(jsonData) {
    let html = "<table>\n";
    for(let json of jsonData) {
        let obj = JSON.parse(json);
        html += "\t<tr>\n";
        html += `\t\t<td>${obj['name']}</td>\n`;
        html += `\t\t<td>${obj['position']}</td>\n`;
        html += `\t\t<td>${obj['salary']}</td>\n`;
        html += "\t<tr>\n";
    }

    html += "</table>";
    return html;

    for(let i = 0; i < arr.length; i++) {

    }

    for(let el of arr) {

    }

    for(let el in arr) {

    }
}