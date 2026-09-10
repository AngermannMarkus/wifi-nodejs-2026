import { Server, createServer, STATUS_CODES } from 'node:http';

function getStatusCode(message) {
    return (
        Object.entries(STATUS_CODES).find(([, statusMessage]) => {
            console.log(message, statusMessage);
            return message === statusMessage;
        })?.[0] || 500
    );
};

const port = 8080;

// createServer((request, response) => {
const server = new Server(); // Alternative

server.on('request', (request, response) => {
    response.writeHead(getStatusCode('OK'), { 'content-type': 'text/html' });
    const responseBody = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>Addressbuch</title>
            </head>
            <body>
                <h1>Addressbuch</h1>
            </body>
            </html>`;
        
    response.end(responseBody);
});

//}).listen(port, () => {
server.on('listening', () => {
    console.log(`Adressbuch erreichbar unter http://localhost:${port}`);
});