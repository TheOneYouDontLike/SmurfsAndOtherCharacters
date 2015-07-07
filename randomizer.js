'use strict';

import fs from 'fs';

function getRandom(start, end) {
    return Math.floor((Math.random() * end) + start);
}

function getRandomSmurf() {
    let smurfs = JSON.parse(fs.readFileSync('./smurfs.json'));

    let randomNumber = getRandom(0, smurfs.length);

    return smurfs[randomNumber];
}

export default {
    getRandomSmurf: getRandomSmurf
};