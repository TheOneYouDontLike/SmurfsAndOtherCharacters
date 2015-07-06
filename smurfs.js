'use strict';

import fs from 'fs';
import liner from './liner';

function fillSmurfsArray(callback) {
    let array = [];
    let source = fs.createReadStream('./smurfs.txt');
    source.pipe(liner);

    liner.on('readable', function () {
        let line;
        while (line = liner.read()) {
            array.push({ name: line.trim() });
        }
    });

    liner.on('end', function() {
        callback(array);
    });
}

fillSmurfsArray(function(smurfsArray) {
    console.log(smurfsArray);

    fs.writeFile('smurfs.json', JSON.stringify(smurfsArray), function(error) {
        if (error) console.log(error);
    });
});