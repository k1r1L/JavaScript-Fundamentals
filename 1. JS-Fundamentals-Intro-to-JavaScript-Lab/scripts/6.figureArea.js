function calcFigureArea(w1, h1, w2, h2) {
    [w1, h1, w2, h2] = [w1, h1, w2, h2].map(Number);
    let w3 = Math.min(w1, w2);
    let h3 = Math.min(h1, h2);
    [s1, s2, s3] = [w1 * h1, w2 * h2, w3 * h3];

    console.log(s1 + s2 - s3);
}

calcFigureArea(['2', '4', '5', '3']);
calcFigureArea(['13', '2', '5', '8']);

