import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

let con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

con.connect(function (err) {
    if (err) throw err;
    console.log('MySQL Connected!');
    // max 1 x ausführen
    // con.query('CREATE DATABASE mydatabase', function (err, result) {
    //     if (err) throw err;
    //     console.log('Database created.');
    // });

    con.query('CREATE TABLE products (productID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));',
        function (err, result) {
            if (err) throw err;
            console.log('Table created');
        });
    con.query("INSERT INTO products (productID, name) VALUES (1, 'Apfel');",
        function (err, result) {
            if (err) throw err;
            console.log('1 insert in table products');
        });
    con.query("INSERT INTO products (productID, name) VALUES (2, 'Birne');",
        function (err, result) {
            if (err) throw err;
            console.log('1 insert in table products');
        });
    con.query("SELECT * FROM products;",
        function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    con.query("DROP TABLE products;",
        function (err, result) {
            if (err) throw err;
            console.log('Table deleted');
        });
    con.end();
});
