function bigNum(list) {
    if (!Array.isArray(list)) {
        return 'Error: netinkamas tipas, turi buti sarasas';
    }
    if (list.length === 0) {
        return 'Error: pateiktas sarasas negali buti tuscias';
    }

    let biggest = -Infinity;
    let secondBiggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        if (typeof number !== 'number' || (!isFinite(number))) {
            continue;
        }

        if (number > biggest) {
            secondBiggest = biggest;
            biggest = number;
        } else if (number > secondBiggest && number < biggest) {
            secondBiggest = number;
        }
    }

    if (secondBiggest === -Infinity) {
        return 'Error: sarase nerastas nei vienas normalus skaicius';
    }
    return secondBiggest;
}


console.log(bigNum([1, 2, 3]), '->', 2);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 18);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 66);
