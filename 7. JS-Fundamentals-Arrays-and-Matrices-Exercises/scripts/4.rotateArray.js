function rotateArr(arr) {
    let rotations = Number(arr.pop());
    for(let i = 0; i < rotations; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }

    return arr.join(' ');
}