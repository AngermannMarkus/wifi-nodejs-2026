import express from 'express';
import path from'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// für die POST Variante
import bodyParser from 'body-parser';
let urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-post.html'));  // wechseln
});

app.get('/process_get', (req, res) => {
    let form = {
      first_name:req.query.first_name,  //JSON Formatierung
      last_name:req.query.last_name
    };
    console.log(form);
    res.end(JSON.stringify(form));
});

app.post('/process_post', urlencodedParser, (req, res) => {
    let form = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
    };
        console.log(form);
    res.end(JSON.stringify(form));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});