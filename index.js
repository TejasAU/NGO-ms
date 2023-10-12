const express = require('express');
const app = express();
const body = require('body-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:""
})

app.get("/" , (req , res) => {
    res.send("Hello Express");
})

app.listen(5000, () => {
    console.log('hello world');
})