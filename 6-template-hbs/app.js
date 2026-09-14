import express from 'express';
import hbs from 'hbs';

const app = express();
const port = 3000;

app.set('view engine', 'hbs');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});