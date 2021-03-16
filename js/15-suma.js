const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;

function desimteriopaSuma(pirmas, antras) {
    const s = pirmas + antras;
    console.log(s);
}

desimteriopaSuma(a, b);
console.log('--------');
desimteriopaSuma(c, d);
console.log('--------');
desimteriopaSuma(e, f);


function labas(vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} metai, gyvenu ${vietovardis}.`);
}

labas('Petras', 88, 'Vilniuje');
labas('Maryte', 66, 'kaune');
labas('Alphe', 5, 'namie');

function kvadratu(x) {
    console.log(x*x);
}

kvadratu(5);
kvadratu(55);
kvadratu(5555);