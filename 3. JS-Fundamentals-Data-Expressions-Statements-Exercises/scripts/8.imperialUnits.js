function calcInchesToFeet(inches) {
    if(inches < 12) {
       console.log(`0\'-${inches}\"`);
    } else {
        let feet = Math.floor(inches / 12);
        let left = inches % 12;
        console.log(`${feet}\'-${left}\"`)
    }
}