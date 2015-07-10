'use strict';

import fs from 'fs';
import liner from './liner';
import randomizer from './randomizer';

function readFromFileLineByLine(filePath, readLineCallback, endReadingCallback) {
    let source = fs.createReadStream(filePath);
    source.pipe(liner);

    liner.on('readable', function () {
        let line;
        while (line = liner.read()) {
            readLineCallback(line);
        }
    });

    liner.on('end', function() {
        endReadingCallback(endReadingCallback);
    });
}

let newArray = [];

function readLineCallback(line) {
    newArray.push({ name: line.trim() });
}

function endReadingCallback() {
    fs.writeFile('smurfs.json', JSON.stringify(newArray), function(error) {
        if (error) console.log(error);
    });
}

let filenameFromCommandLine = process.argv[2];
readFromFileLineByLine('./' + filenameFromCommandLine, readLineCallback, endReadingCallback);

console.log('Random smurf: ', randomizer.getRandomSmurf());
console.log('Random gummi bear: ', randomizer.getRandomGummiBear());