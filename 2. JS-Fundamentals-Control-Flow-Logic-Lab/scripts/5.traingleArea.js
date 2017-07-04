function calcArea(a, b, c) {
    [a, b, c] = [a, b, c].map(Number);
    let halfPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    return area;
}