function escape(arr) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    arr = arr.filter(el => el !== '');
    let list = "<ul>";
    for(let text of arr) {
        list += `\n  <li>${text.htmlEscape()}</li>`;
    }

    list += "\n</ul>";
    return list;
}
