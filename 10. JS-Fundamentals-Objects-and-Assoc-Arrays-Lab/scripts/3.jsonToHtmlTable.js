function fromJSONToHTMLTable(json) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        console.log(obj['Name']);
        html += `  <tr><td>${htmlEscape(obj['Name'])}` +
            `</td><td>${htmlEscape(obj['Price'].toString())}</td></tr>\n`;
    }

    return html + "</table>";
    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}