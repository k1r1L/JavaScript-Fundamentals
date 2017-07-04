function calcDistance(x1, y1, x2, y2) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    let deltaX = Math.abs(x1 - x2);
    let deltaY = Math.abs(y1 - y2);

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    console.log(distance);
}