const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];

console.log(zodis);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Elvyra'];

for (let i = 0; i < zmones.length; i++) {
const asmuo = zmones[i];
console.log(asmuo);
}

const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];

let sum = 0; 

for (let i = 0; i < marks.length; i++) {
    const pazymys = marks[i];
    console.log(pazymys);
} 

const average = sum / marks.length;
console.log(sum, '/', marks.length, '=', average);

const sakinys = 'Labas rytas';

for ( let i = 0; i < sakinys.length; i++) {
    const simbolis = sakinys[i];
    console.log(simbolis);
}