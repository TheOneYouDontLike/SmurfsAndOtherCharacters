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

function getRandomSuperhero() {
    let superheroes = JSON.parse(fs.readFileSync('./superheroes.json'));

    let randomNumber = getRandom(0, superheroes.length);

    return superheroes[randomNumber];
}

export default {
    getRandomSmurf: getRandomSmurf,
    getRandomGummiBear: getRandomGummiBear,
    getRandomSuperhero: getRandomSuperhero
};