import express from 'express';
import hbs from 'hbs';

const app = express();
const port = 3000;

app.set('view engine', 'hbs');

let demodata = {
    name: 'Markus',
    tel: 1231231241
};

let project = {
    name: 'Markus',
    skills: ['NodeJS', 'HTML', 'CSS', 'Java', 'MySQL', 'Python']
};

app.get('/', (req, res) => {
    // res.render('demo', { demo: demodata });
    res.render('demo', { project: project });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});