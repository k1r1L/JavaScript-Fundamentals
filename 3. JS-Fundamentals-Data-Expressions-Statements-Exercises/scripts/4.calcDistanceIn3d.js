function calcDistanceIn3d(numArr) {
    let [x1, y1, z1, x2, y2, z2] = numArr;
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
    return distance;
}
