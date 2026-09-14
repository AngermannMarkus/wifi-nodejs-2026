import express from 'express';

const app = express();
const port = 3000;

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello WIFI 2026!');
});

app.get('/wifitest', (req, res) => {
  res.send('Das ist ein ExpressJS Test.');
});

app.get('/abcd*node-js-kurs', (req, res) => {  //Platzhalter
  res.send('Hat funktioniert!');
});

app.get('/next', function (req, res, next) {  //keine Arrowfunction Callback
  console.log('done by the next function...');
  next();
}, function (req, res) {
  res.send('Hallo next');
});

app.use(function (req, res) {
  res.status(404).send('404 Error!! Can not find that page...');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
