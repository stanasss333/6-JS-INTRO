const animal = 'dog';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

        case 'cat':
            console.log('Meow meow');
            break;

    default:
        console.log('Unknow animal');
        break;
}

if (animal === 'dog') {
    console.log('Bark bark')
} else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknow animal');
}

const day = 1;

switch (day) {
    case 1:
        console.log('Pirm');
        break;

    case 2:
        console.log('Antr');   
        break;
        
    case 3:
        console.log('Tre');
        break;
        
    case 4:
        console.log('Ketv');
        break;
        
    case 5:
        console.log('Penk');
        break;
        
    case 6:
        console.log('Sest');
        break;
        
    case 7:
        console.log('Sekm');
        break;
        
    default:
        console.log('Tokia savaites diena neegzistuoja');    
}

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena'); 
        break;
    case 6:
    case 7:
        console.log('savaitgalio diena');
        break;
    default:
        console.log('Tokia savaites diena neegzistuoja');    
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day == 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia savaites diena neegzistuoja');
}

switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('Nelygine diena');
        break;

    case 2:
    case 4:
    case 6:
        console.log('Lygine diena');
        break;

    default:
        console.log('Tokia savaites diena neegzistuoja');    
}

const process = 1;

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2: 
        console.log('isideti arbatos');
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai;)');   
}