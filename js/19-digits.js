function digits(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'Error: turi buti skaiciaus tipas';
    }

    if (!isFinite(skaicius)) {
        return `Error: ${skaicius} nera normalus skaicius`
    }

    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    if (skaicius < 0) {
        skaitmenuKiekis--;
    }
    return skaitmenuKiekis
} 

console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([4624]));
console.log(digits(digits));

console.log(digits(5), '->', 1);
console.log(digits(781), '->', 3);
console.log(digits(37060123456), '->', 11);
console.log(digits(3.1415), '->', 5);
console.log(digits(+3.1415), '->', 5);
console.log(digits(-456), '->', 3);
console.log(digits(-3.1415), '->', 5);