'use strict';

import fs from 'fs';

function getRandom(start, end) {
    return Math.floor((Math.random() * end) + start);
}

fs.readFile('./smurfs.json', (error, data) => {
    let smurfs = JSON.parse(data);

    let randomNumber = getRandom(0, smurfs.length);

    console.log(randomNumber);

    let randomSmurf = smurfs[randomNumber];

    console.log(randomSmurf);
});
