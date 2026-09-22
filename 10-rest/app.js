import express from 'express';
import fs from 'fs';
const app = express();

// alle Datensätze anzeigen
app.get('/', (req, res) => {
    fs.readFile('users.json', 'utf-8', (error, data) => {
        res.end(data);
    });
});

// ein Datensatz per id
app.get('/:id', (req, res) => {
    fs.readFile('users.json', 'utf-8', (error, data) => {
        let users = JSON.parse(data);
        let user = users['user' + req.params.id];
        res.end(JSON.stringify(user));
    });
});

// neuen Datensatz hinzufügen
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    fs.readFile('users.json', 'utf-8', (error, data) => {
        let users = JSON.parse(data);
        let user = req.body.user4;  // zum Test
        users['user' + user.id] = user;
        res.end(JSON.stringify(users));
    });
});

// Datensatz löschen
app.delete('/:id', (req, res) => {
    fs.readFile('users.json', 'utf-8', (error, data) => {
        let users = JSON.parse(data);
        let id = 'user' + req.params.id;
        users[id] = req.body;  // Löschen
        res.end(JSON.stringify(users));
    });
});

// Datensatz updaten



app.listen(5000, () => {
    console.log('REST API running at localhost:5000');
});