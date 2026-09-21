import fs from 'node:fs';

// asynchrone Variante
fs.readFile('example.txt', 'utf-8', (error, data) => {
    console.log('Inhalt: ', data);
});
console.log('fertig gelesen - asynchron');

// synchrone Variante
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('Inhalt synchron: ', data);
console.log('fertig gelesen - synchron');