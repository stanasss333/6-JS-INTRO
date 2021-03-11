const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
}

const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau);
} else {
    const cdNeMaziau = `${c} yra Ne maziau uz ${d}`;
    console.log(cdNeMaziau);
}

const e = 89;
const f = 89;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (e >= f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (e == f) {
    console.log('TAIP');
} else {
    console.log('NE');
}
const sandauga = e * 20;
console.log(sandauga);

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log(`Ismetame cookies sutikimo bloka...1`);
}
if (!cookiesAgreed) {
    console.log(`Ismetame cookies sutikimo bloka...2`);
}

const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;
console.log(pomidoroIlgis);

const akys = 'Rudos';

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else if (akys === 'Zalios') {
    console.log('Sexy');
} else if (akys === 'Pilkos') {
    console.log('Niekuo neipatingi...');
} else if (akys === 'Rudos') {
    console.log('Melagis?');
} else if (akys === 'Raudonos') {
    console.log('Program');
} else {
    console.log('A tu turi akis');
}

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else {
    if (akys === 'Zalios') {
        console.log('Sexy'); 
    } else {
        if (akys === 'Pilkos') {
            console.log('Niekuo neipatingi...'); 
        } else {
            if (akys === 'Rudos') {
                console.log('Melagis?');  
            } else {
                if (akys === 'Raudonos') {
                    console.log('Program');  
                } else {
                    console.log('A tu turi akis');
                }
            }
        }
    }
}

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
}

if (akys === 'Zalios') {
    console.log('Sexy'); 
}

if (akys === 'Pilkos') {
    console.log('Niekuo neipatingi...');
}

if (akys === 'Rudos') {
    console.log('Melagis?');
}

if (akys === 'Raudonos') {
    console.log('Program'); 
}

if (akys !== 'Melynos' &&
akys !== 'Zalios' &&
akys !== 'Pilkos' &&
akys !== 'Rudos' &&
akys !== 'Raudonos') {
    console.log('A tu turi akis');
}

if (akys === 'Melynos' ||
akys === 'Zalios' ||
akys === 'Pilkos' ||
akys === 'Rudos' ||
akys === 'Raudonos') {
    console.log('Tu turi vienas is man zinomu akiu spalvu!');
}