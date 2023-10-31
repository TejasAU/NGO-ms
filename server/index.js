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

//Staff API

app.get("/api/staff/get" , (req , res) => {
    const displayStaff = "select * from staff";
    db.query(displayStaff, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/staff/remove/:ST_id" , (req , res ) => {
    const { ST_id } = req.params;
    const sqlRemove = "delete from staff where ST_id = ?";
    db.query(sqlRemove , ST_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

//Event API

app.get("/api/event/get" , (req , res) => {
    const displayEvent = "select * from event";
    db.query(displayEvent, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/event/remove/:Event_id" , (req , res ) => {
    const { Event_id } = req.params;
    const sqlRemove = "delete from event where Event_id = ?";
    db.query(sqlRemove , Event_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

//Donor API

app.get("/api/donor/get" , (req , res) => {
    const displayEvent = "select * from donor";
    db.query(displayEvent, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/donor/remove/:Donor_id" , (req , res ) => {
    const { Donor_id } = req.params;
    const sqlRemove = "delete from donor where Donor_id = ?";
    db.query(sqlRemove , Donor_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

//Work API

app.get("/api/work/get" , (req , res) => {
    const displayWork = "select * from work";
    db.query(displayWork, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/work/remove/:Donor_id" , (req , res ) => {
    const { Work_id } = req.params;
    const sqlRemove = "delete from work where Work_id = ?";
    db.query(sqlRemove , Work_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

//Supervisor API

app.get("/api/supervisor/get" , (req , res) => {
    const displaySupervisor = "select * from supervisor";
    db.query(displaySupervisor, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/supervisor/remove/:SUP_ID" , (req , res ) => {
    const { SUP_ID } = req.params;
    const sqlRemove = "delete from supervisor where SUP_ID = ?";
    db.query(sqlRemove , SUP_ID , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})

//AwarenessSessions API

app.get("/api/awarenesssessions/get" , (req , res) => {
    const displayAwarenessSessions = "select * from awareness_sessions";
    db.query(displayAwarenessSessions, (error , result) =>{
        res.send(result);
    })
})

app.delete("/api/awarenesssessions/remove/:Work_id" , (req , res ) => {
    const { Work_id } = req.params;
    const sqlRemove = "delete from awareness_sessions where Work_id = ?";
    db.query(sqlRemove , Work_id , (error , result) => {
        if( error ) {
            console.log(error);
        }
    })

})


//testing

app.get("/" , (req , res) => {
    res.send("Hello Express");
})

app.listen(5000, () => {
    console.log('Server started on localhost: 5000');
})

//testing