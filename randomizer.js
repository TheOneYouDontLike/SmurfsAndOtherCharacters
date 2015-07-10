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

function getRandomGummiBear() {
    let gummiBears = JSON.parse(fs.readFileSync('./gummibears.json'));

    let randomNumber = getRandom(0, gummiBears.length);

    return gummiBears[randomNumber];
}

export default {
    getRandomSmurf: getRandomSmurf,
    getRandomGummiBear: getRandomGummiBear
};