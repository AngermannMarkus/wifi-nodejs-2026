import { createServer } from 'node:http';
import getStatusCode from './getstatuscode.js';
import addressModel from './address-model.js';
import getList from './getlist.js';
// import addressData from './address-data.js';
import redirect from './redirect.js';

const port = 8080;

createServer((request, response) => {
    const parts = request.url.split('/');
    if (parts.includes('delete')) {
        console.log(parts);
        const id = parseInt(parts[2], 10);
        addressModel.deleteById(id);
        redirect(response, '/');
    } else {
        response.writeHead(getStatusCode('OK'), { 'content-type': 'text/html' });
        const addressData = addressModel.getAll();
        const responseBody = getList(addressData);
        response.end(responseBody);
    }

}).listen(port, () => {
    console.log(`Adressbuch erreichbar unter http://localhost:${port}`);
});