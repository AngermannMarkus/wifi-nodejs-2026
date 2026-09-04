import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const body = await readFile('./template/index.html', 'utf-8');

const server = createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});

    response.end(body);
});

server.listen(8080, () => {
    console.log('Hello World!');
    console.log(`Server is listening http://localhost:${server.address().port}`);
});