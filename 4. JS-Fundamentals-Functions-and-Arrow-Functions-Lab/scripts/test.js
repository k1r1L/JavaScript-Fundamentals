let f = (function (count) {
    let x = 0;
    for (let i = 1; i <= count; i++) {
        console.log('+'.repeat(i));
        console.log(++x);
    }
});

f(4);
f(4);
