function calcDistanceOverTime(numArr) {
    let [v1, v2, t] = numArr;
    let timeInHours = t / 60 / 60;
    let dist1 = Number(v1 * 1000 * timeInHours);
    let dist2 = Number(v2 * 1000 * timeInHours);
    let delta = Math.abs(dist1 - dist2);

    return delta;
}