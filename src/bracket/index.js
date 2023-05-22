const { JsonDatabase } = require('brackets-json-db');
const storage = new JsonDatabase();

const { BracketsManager } = require('brackets-manager');
const manager = new BracketsManager(storage);

const { convertData } = require('brackets-toornament-layer');


const fs = require('fs');

function writeJSONFile(data) {
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('El archivo ha sido guardado.');
    });
}


const main = async () => {
    const fetchedJson = await fetch('https://raw.githubusercontent.com/Drarig29/brackets-toornament-layer/59319b3d94c07d4b94ea94b580b679ede12ca046/toornament.json').then(res => res.json());

    const data = convertData(fetchedJson);
    writeJSONFile(data);
}

main();