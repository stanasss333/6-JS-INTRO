const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
}

const ats= `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);

const nuoA = 0;
const ikiA = 11;
const daliklisA = 5;
let kiekisA = 0;

for (let i = nuoA; i <= ikiA; i++) {
    if (i % daliklisA === 0) {
        kiekisA++;
    }
}

const atsA= `Skaiciu intervale tarp ${nuoA} ir ${ikiA}, besidalijanciu be liekanos is ${daliklisA} yra ${kiekisA} vienetai.`;
console.log(atsA);

const nuoB = 0;
const ikiB = 11;
const daliklisB = 7;
let kiekisB = 0;

for (let i = nuoB; i <= ikiB; i++) {
    if (i % daliklisB === 0) {
        kiekisB++;
    }
}

const atsB= `Skaiciu intervale tarp ${nuoB} ir ${ikiB}, besidalijanciu be liekanos is ${daliklisB} yra ${kiekisB} vienetai.`;
console.log(atsB);