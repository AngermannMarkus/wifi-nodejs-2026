import { createServer, STATUS_CODES } from 'node:http';

function getStatusCode(message) {
    return (
        Object.entries(STATUS_CODES).find(([, statusMessage]) => {
            console.log(message, statusMessage);
            return message === statusMessage;
        })?.[0] || 500
    );
};

const port = 8080;

createServer((request, response) => {
    //hier geht es am Donnerstag weiter
}).listen(port, () => {
    console.log(`Adressbuch erreichbar unter http://localhost:${port}`);
});