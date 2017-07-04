function extractNonDecreasingSubs(arr) {
    let currentMax = arr[0];
    return arr.filter(function (value) {
       if(value >= currentMax) {
           currentMax = value;
           return true;
       }
    }).join('\n');
}