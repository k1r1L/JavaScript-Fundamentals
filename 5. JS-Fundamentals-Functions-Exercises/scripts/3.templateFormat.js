function createTemplate(arr) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '\n<quiz>';
    for(let i = 0; i < arr.length - 1; i += 2) {
        xml += '\n  <question>';
        xml += `\n\t${arr[i]}`;
        xml += '\n  </question>';
        xml += '\n  <answer>';
        xml += `\n\t${arr[i + 1]}`;
        xml += '\n  </answer>';
    }
    xml += '\n</quiz>';
    return xml;
}

