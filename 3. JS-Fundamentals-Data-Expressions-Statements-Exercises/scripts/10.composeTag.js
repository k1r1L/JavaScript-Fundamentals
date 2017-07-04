function composeTag(arr) {
    let [fileLocation, alternateText] = arr;
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`)
}