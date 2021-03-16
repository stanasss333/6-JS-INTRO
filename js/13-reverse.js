const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}

console.log(text, '-->', reverse);

const textA = 'labas';
let reverseA = '';

for (let i = 0; i < textA.length; i++) {
    reverseA = textA[i] + reverseA;
}

console.log(textA, '-->', reverseA);

const textB = 'Labas rytas';
let reverseB = '';

for (let i = 0; i < textB.length; i++) {
    reverseB = textB[i] + reverseB;
}

console.log(textB, '-->', reverseB);

function reverseString(text) {
    let reverseC = '';

    for (let i = 0; i < text.length; i++) {
        reverseC = text[i] + reverseC;
    }
    console.log(text, '-->', reverseC);   
}

const pirmasZodis = 'labas rytas';
reverseString(pirmasZodis)

reverseString('Lietuva')
reverseString('sedek uzu kedes')
reverseString('sula')
