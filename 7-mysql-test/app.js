import mysql from 'mysql';

let con = mysql.createConnection({
    // für lokal installiertes MySQL
    host: "localhost",
    user: "username",
    password: "password",
    database: "mydatabase"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('MySQL Connected!');
    // max 1 x ausführen
    // con.query('CREATE DATABASE mydatabase', function (err, result) {
    //     if (err) throw err;
    //     console.log('Database created.');
    // });
    con.query('CREATE TABLE products (name VARCHAR(255) NOT NULL, description VARCHAR(255));',
        function (err, result) {
            if (err) throw err;
            console.log('Table created');
        });
    con.query("INSERT INTO products (name, description) VALUES ('Artikel 1', 'Apfel'));",
        function (err, result) {
            if (err) throw err;
            console.log('1 insert in table products');
        });
    con.query("SELECT * FROM products;",
        function (err, result) {
            if (err) throw err;
            console.log(result);
        });
});
