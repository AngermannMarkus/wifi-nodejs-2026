import getStatusCode from './getstatuscode.js';

export default function redirect(response, to) {
    response.writeHead(getStatusCode('See Other'), {
        location: to,
        'content-type': 'text/plain',
    });
    response.end('Redirecting to /');
}