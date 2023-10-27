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
    password:"root1234",
    database:"ngo2"
});

app.get("/" , (req , res) => {
    const sqlInsert = "insert into partner ( partner_id , name , contact_no , email ) values ('p008','test','test','test')";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
    })
    res.send("Hello Express");
})

app.listen(5000, () => {
    console.log('Server started on localhost: 5000');
})

//testing