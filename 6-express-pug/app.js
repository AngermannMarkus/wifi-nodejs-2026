import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'PUG Test 1', message: 'WIFI Template Test mit Pug.'});
});

app.get('/seite-a', (req, res) => {
    res.render('index', {title: 'PUG Test Seite A', message: 'Unterseite A.', ptext: 'Test 123'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});