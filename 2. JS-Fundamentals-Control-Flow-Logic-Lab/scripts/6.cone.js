function findConeDetails(radius, height) {
    [radius, height] = [radius, height].map(Number);
    let s = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + s);

    return `volume = ${volume}\narea = ${area}`;
}