function roadRadar(arr) {
    let [speed, area] = arr;
    let diff = getDifference();
    if(diff < 0) {
        diff = Math.abs(diff);
        return getSeverity(diff);
    }

    function getDifference() {
        switch(area) {
            case 'city':
                return 50 - speed;
                break;
            case 'residential':
                return 20 - speed;
                break;
            case 'interstate':
                return 90 - speed;
                break;
            case 'motorway':
                return 130 - speed;
                break;
        }
    }
    function getSeverity(diff) {
        if (diff <= 20) {
            return 'speeding';
        } else if(diff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}