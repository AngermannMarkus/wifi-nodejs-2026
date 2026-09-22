import { error } from 'node:console';
import fs from 'node:fs/promises';

async function readJSONFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${filename}: ${error}`);
        return [];
    }
};

async function main() {
    try {
        const names = await readJSONFile('name.json');
        const addresses = await readJSONFile('address.json');

        const bigData = names.map((name) => {
            const matching = addresses.find(
                (address) => address.id === name.id
            );
            return { ...name, ...matching };  // spread operator
        });

        await fs.writeFile('bio.json', JSON.stringify(bigData, null, 4));
        console.log('SUCCESS: new file created.');
    } catch (error){
        console.error('Error combining files: ', error);
    }
};

main();