import { STATUS_CODES } from 'node:http';

export default function getStatusCode(message) {
    return (
        Object.entries(STATUS_CODES).find(([, statusMessage]) => {
            console.log(message, statusMessage);
            return message === statusMessage;
        })?.[0] || 500
    );
};