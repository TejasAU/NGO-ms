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

app.get("/api/partner/get" , (req , res) => {
    const displayPartner = "select * from partner";
    db.query(displayPartner, (error , result) =>{
        res.send(result);
    })
})

app.post("/api/partner/post" , (req , res ) => {
    const {Partner_id , Name , email , contact_no } = req.body;
    const sqlInsert = "insert into partner (Partner_id , name , email , contact_no ) values ( ? , ? , ? , ?)";
    db.query(sqlInsert , [ Partner_id , Name , email , contact_no], (error , result) => {
        if(error){
            console.log(error);
        }
    })
})

app.delete("/api/partner/remove/:Partner_id" , (req , res ) => {
    const { Partner_id } = req.params;
    const sqlRemove = "delete from partner where Partner_id = ?";
    db.query(sqlRemove , Partner_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

app.get("/api/partner/get/:Partner_id" , (req , res) => {
    const {Partner_id} = req.params;
    const sqlGet = "select * from partner where Partner_id = ?";
    db.query(sqlGet, Partner_id ,  (error , result) =>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})

app.put("/api/partner/update/:Partner_id" , (req , res) => {
    const {Partner_id} = req.params;
    const {Name , email , contact_no} = req.body;
    const sqlUpdate = "update partner set Name = ? , email = ? , contact_no = ? where Partner_id = ?";
    db.query(sqlUpdate, [Name , email , contact_no , Partner_id ] ,  (error , result) =>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})

app.get("/" , (req , res) => {
    res.send("Hello Express");
})

app.listen(5000, () => {
    console.log('Server started on localhost: 5000');
})

//testing