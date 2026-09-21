import express, { response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.end('Hallo WIFI Kurs - Signal Test.');
});

const server = app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});

function shutdown() {
    console.log('...received shutdown signal');

    server.close(() => {
        // ... Datenbank Connection beenden, API terminieren, E-Mail schicken, ...
        console.log('Apps closed.');
        process.exit(0);
    });
};

process.on('SIGINT', shutdown);
