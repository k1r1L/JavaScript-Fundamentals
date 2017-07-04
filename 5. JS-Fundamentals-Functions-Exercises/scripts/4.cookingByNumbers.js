"use strict"

function cookingByNumbers(arr) {
    let [num, op1, op2, op3, op4, op5] =
        [Number(arr[0]), arr[1], arr[2], arr[3], arr[4], arr[5]];
    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => ++num;
    let bake = (num) => num *= 3;
    let fillet = (num) => num -= 0.2 * num;
    let exec = (num, op) => op(num);
    for(let op of [op1, op2, op3, op4, op5]) {
        switch (op) {
            case 'chop':
                num = exec(num, chop);
                break;
            case 'dice':
                num = exec(num, dice);
                break;
            case 'spice':
                num = exec(num, spice);
                break;
            case 'bake':
                num = exec(num, bake);
                break;
            case 'fillet':
                num = exec(num, fillet);
                break;
        }

        console.log(num);
    }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
