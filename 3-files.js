import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs';

try {
    const data = await readFile('3-input.txt');  // Testfall: Tippfehler im Dateinamen
    console.log(data);
    console.log(data.toString());
} catch (error) {
    console.log(error);
}


// Überprüfung der Frage 392 aus dem Fragenkatalog
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFile( __dirname + '/test.txt', 'TEST', (err)=>{
if ( err ) {
console.log( 'Fehler' );
}
});