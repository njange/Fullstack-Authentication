import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookies from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookies());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "signup"
});

app.listen(3000, () => {
    console.log('Server is running on port 8081');
});