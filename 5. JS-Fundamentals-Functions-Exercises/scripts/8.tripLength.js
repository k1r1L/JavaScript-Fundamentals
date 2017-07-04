function findPath(nums) {
    let [x1, y1, x2, y2, x3, y3] = nums;
    let ab = calcDistance(x1, y1, x2, y2);
    let bc = calcDistance(x2, y2, x3, y3);
    let ca = calcDistance(x3, y3, x1, y1);
    let firstPath = ab + bc;
    let secondPath = ab + ca;
    let thirdPath = bc + ca;
    if(firstPath <= secondPath && firstPath <= thirdPath) {
        console.log('1->2->3: ' + firstPath);
    } else if (secondPath <= firstPath && secondPath <= thirdPath) {
        console.log('2->1->3: ' + secondPath);
    } else {
        console.log('1->3->2: ' + thirdPath);
    }

    function calcDistance(x1, y1, x2, y2) {
        let deltaX = Math.abs(x1 - x2);
        let deltaY = Math.abs(y1 - y2);

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
}