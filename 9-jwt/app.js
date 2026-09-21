import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

app.post('/generateToken', (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let payload = {
        sub: 123123,
        name: 'Markus',
        time: Date(),
    };

    const token = jwt.sign(payload, jwtSecretKey);
    res.send(token);
});