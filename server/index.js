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

app.get("/api/get" , (req , res) => {
    const displayPartner = "select * from partner";
    db.query(displayPartner, (error , result) =>{
        res.send(result);
    })
})

app.post("/api/post" , (req , res ) => {
    const {Partner_id , Name , email , contact_no } = req.body;
    const sqlInsert = "insert into partner (Partner_id , name , email , contact_no ) values ( ? , ? , ? , ?)";
    db.query(sqlInsert , [ Partner_id , Name , email , contact_no], (error , result) => {
        if(error){
            console.log(error);
        }
    })
})

app.get("/" , (req , res) => {
    res.send("Hello Express");
})

app.listen(5000, () => {
    console.log('Server started on localhost: 5000');
})

//testing