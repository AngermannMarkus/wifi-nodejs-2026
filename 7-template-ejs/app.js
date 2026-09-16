import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let persons = [
        { name: 'Max', birth_year: 1999 },
        { name: 'Petra', birth_year: 2002 },
        { name: 'Julia', birth_year: 1990 }
    ];
    let line = 'Auflistung aller Personen';

    res.render('pages/index', {
        persons, line
    });
});

app.get('/kontakt', (req, res) => {
    res.render('pages/kontakt');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});