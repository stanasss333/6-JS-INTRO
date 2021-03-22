function memberCount(asmuo) {
let nariuKiekis = 1;

if (asmuo.children) {
    for(let i = 0; i < asmuo.children.length; i++) {
        const child = asmuo.children[i];

        nariuKiekis += memberCount(child);
    }
}
return nariuKiekis;
}

function averageAge(asmuo) {
    let childCount = 1;
    let childAgeSum = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];

            const childInfo = averageAge(child);
            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;
            
        }
    }
    return {
        childCount: childCount,
        ageSum: childAgeSum
    }
}







const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]
        },
    ]
}

const count = memberCount(gimine1);
console.log(count);

const giminesDuomenys = averageAge(gimine1);
console.log(giminesDuomenys);


let average = giminesDuomenys.ageSum / giminesDuomenys.childCount;
console.log(giminesDuomenys, 'Average age:', average);